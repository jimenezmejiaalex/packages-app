import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IPackageDelivered} from '../interfaces/IPackageDelivered';
import {Storage} from '@ionic/storage';
import {Network} from '@ionic-native/network/ngx';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {IPackage} from '../interfaces/Package';
import {Observable} from 'rxjs';
import {LoadingController} from '@ionic/angular';
import {isBoolean} from 'util';
import {BodyPost} from '../interfaces/bodyPost';
import {API_URL, GET_URL, POST_URL, SERVER_URL} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  // API_URLS
  URL = 'http://cycmultiservicios.com/tome/paquetes';
  URL_POST = 'http://cycmultiservicios.com/tome/mt_cambio';
  packages: Array<IPackage> = [];
  packagesEdited: Array<IPackageDelivered> = [];
  pckgsID = 'packages';
  pckgsEditedID = 'packagesedited';
  loading = new LoadingController();
  constructor(
    private http: HttpClient,
    private storage: Storage,
    public network: Network,
    public dialog: Dialogs,
    ) {}

    // Show a loading widget
  async loadingStart() {
    const result = await this.loading.create();
    await result.present();
  }

  // Stop the loading widget
  async loadingStop() {
    await this.loading.dismiss();
  }

  // Returns the length of the packages edited Array
  getPackagesEditedSize(): number {
    return this.packagesEdited.length;
  }

  // Check the network connection
  networkConnection(): boolean {
    return (this.network.type !== this.network.Connection.NONE);
  }

  // Returns the packages from the server using http request
  getPackagesFromServer(): Observable<any> {
    return this.http.get(`${SERVER_URL}${API_URL}${GET_URL}`);
  }

  // Stores all the packages locally
  async storePackagesLocally() {
    await this.loadingStart();
    if (!this.networkConnection()) {
      await this.dialog.alert('No hay coneccion a internet, por favor revisar las conecciones.', 'Alerta');
      await  this.loadingStop();
      return;
    } else {
      const data = await this.getPackagesFromServer().toPromise();
      if (data.nodes) {
        this.packages = data.nodes.map(e => this.getPackageObj(e.node));
        const resultPackages = await this.saveObjLocally(this.packages, this.pckgsID).then(e => {
          return true;
        }).catch(err => {
          return false;
        });
        const resultPackagesEdited = await this.saveObjLocally(this.packagesEdited, this.pckgsEditedID).then(e => {
          return true;
        }).catch(err => {
          return false;
        });
        await this.loadingStop();
        return resultPackages && resultPackagesEdited;
      } else {
        await this.loadingStop();
        await this.dialog.alert('Ocurrio un error en la carga de la informacion.', 'Alerta');
      }
    }
  }

  // Function called when the user wants to start the route
  async dataStartDay() {
    await this.storePackagesLocally();
  }

  // Function called when the user wants to finish the route
  async dataEndDay() {
    await this.loadingStart();
    if (this.networkConnection()) {
      // Network Connection
      const result = await this.uploadToServer(this.packagesEdited.map(obj => {
        return {
          id: obj.package.id_paquete,
          status: obj.package.estado,
          receiver: obj.receiver,
          others: obj.specify,
          description: obj.description
        };
      }));
      if (result) {
        this.removeData();
        this.packages = [];
        this.packagesEdited = [];
        await this.loadingStop();
        await this.dialog.confirm('Dia Finalizado', 'Confirmacion');
      } else {
        // Fail Upload
        await this.loadingStop();
        await this.dialog.alert('Ocurrio un error al intentar subir la informacion');
      }
    } else {
      // No network Connection
      await this.loadingStop();
      await this.dialog.alert('No hay coneccion a internet por favor conectarse a una red');
    }
  }

  // Function called when the user open the app but it is not finished the day
  async continueMyday() {
    await this.loadingStart();
    this.packages = await this.getObjLocally(this.pckgsID);
    this.packagesEdited = await this.getObjLocally(this.pckgsEditedID);
    await this.loadingStop();
  }

  // Remove all the data from the local storage
  removeData() {
    this.storage.remove(this.pckgsEditedID).then(r => r);
    this.storage.remove(this.pckgsID).then(r => r);
  }

  // Check if exist data locally
  async existData() {
    await this.loadingStart();
    const pckgs = await this.getObjLocally(this.pckgsID);
    const pckgsE = await this.getObjLocally(this.pckgsEditedID);
    if (!pckgs || !pckgsE) {
      await this.loadingStop();
      return false;
    } else {
      await this.loadingStop();
      return true;
    }
  }

  // Function call the post server to upload the data
  async uploadToServer(packagesEdited: Array<BodyPost>): Promise<boolean> {
    return await this.postServer(packagesEdited);
  }

  // Map the object from the GET to Package Interface
  getPackageObj(obj) {
    return {
      id_paquete: obj['ID Paquete'],
      peso: obj[`Peso`],
      estado: obj[`Estado`],
      direccion: obj[`Dirección`],
      poblacion: obj[`Población`],
      nombre_de_afiliado: obj[`Nombre de afiliado`],
      codigo_de_afiliado: obj[`Código de afiliado`],
      telefono: obj[`Teléfono`],
      celular: obj[`Celular`],
      detalles: obj[`Detalles`],
    };
  }

  // Returns all the packages stored locally
  getPackages(): Array<IPackage> {
    return this.packages;
  }

  // Save any object locally it needs the id for storing
  async saveObjLocally(obj: any, id: string) {
    const result = await this.storage.set(id, JSON.stringify(obj));
    return result;
  }

  // Get any object from the local storage, It needs the id
  async getObjLocally(id: string) {
    // Retrieving the Package
    const obj = await this.storage.get(id);
    return JSON.parse(obj);
  }

  // Check if there are packages edited stored locally
  async existEdited(id: string) {
    await this.loadingStart();
    const obj = this.packagesEdited.find((e, i) => e.package.id_paquete.includes(id));
    if (!obj) {
      this.loadingStop();
      return false;
    }
    this.loadingStop();
    return obj;
  }

  // Finds the index of a package Edited if exits
  async findsPackageEdited(packageEdited: IPackageDelivered) {
    await this.loadingStart();
    let index: any = false;
    this.packagesEdited.find((e, i) => {
      if (e.package.id_paquete.includes(packageEdited.package.id_paquete)) {
        index = i;
        return true;
      }
    });
    await this.loadingStop();
    return index;
  }

  // Save a Package edited
  async savePackageEdited(packageEdited: IPackageDelivered) {
    await this.loadingStart();
    const index: any = await this.findsPackageEdited(packageEdited);
    if (isBoolean(index)) {
      // Packaged Edited Exists
      this.packagesEdited.push(packageEdited);
      await this.loadingStop();
      if (await this.saveObjLocally(this.packagesEdited, this.pckgsEditedID).then(e => true).catch(err => false)) {
        return await this.setPackageEditedStatusInPcksArray(packageEdited);
      }
    } else {
      await this.loadingStop();
      const result1 = await this.dialog.confirm('El paquete ya fue editado anteriormente, desea continuar ?', 'Alerta')
        .then((e) => e.toString().includes('1'));
      if (result1) {
        await this.loadingStart();
        this.packagesEdited[index] = packageEdited;
        await this.loadingStop();
        if (await this.saveObjLocally(this.packagesEdited, this.pckgsEditedID).then(e => true).catch(err => false)) {
          return await this.setPackageEditedStatusInPcksArray(packageEdited);
        }
      }
      return false;
    }
  }

  // Updating status in the current packages array
  async setPackageEditedStatusInPcksArray(packageEdited: IPackageDelivered) {
    let ind: any = false;
    this.packages.find((e, i) => {
      if (e.id_paquete.includes(packageEdited.package.id_paquete)) {
        ind = i;
        return true;
      }
    });
    this.packages[ind] = this.setStatus(this.packages[ind], packageEdited.package.estado);
    return await this.saveObjLocally(this.packages, this.pckgsID).then(e => true).catch(err => false);
  }

  // Function called to submit the packages edited
  async submitPackageEdited(packageDelivered: IPackageDelivered) {
    await this.loadingStart();
    const result = await this.afterSaving(await this.savePackageEdited(packageDelivered));
    await this.loadingStop();
    return result;
  }

  // Shows a message depending in the value
  async afterSaving(value: boolean) {
    if (value) {
      await this.dialog.confirm('Se ha guardado con exito', 'Confirmacion');
      return true;
    } else {
      await this.dialog.confirm('Ocurrio un Error al salvar la informacion', 'Alerta');
      return false;
    }
  }

  // Update the package status
  setStatus(p: IPackage, status: string): IPackage {
    p.estado = status;
    return p;
  }

  // Post all the data
  async postServer(bodies: Array<BodyPost>): Promise<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const bodiesPost = JSON.stringify(bodies);
    return await this.http.post(`${SERVER_URL}${API_URL}${POST_URL}`, bodiesPost, httpOptions)
      .toPromise()
      .then((response) =>  true)
      .catch((err) => false );
  }
}
