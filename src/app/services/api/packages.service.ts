import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IPackageDelivered } from '../../interfaces/IPackageDelivered';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { IPackage } from '../../interfaces/Package';
import { LoadingController } from '@ionic/angular';
import { isBoolean } from 'util';
import { BodyPost } from '../../interfaces/bodyPost';
import { API_URL, environment, GET_URL, HTTPOPTIONS, POST_URL, SERVER_URL } from '../../../environments/environment.prod';
import { StorageService } from '../storage/storage.service';
import { LocationService } from '../location/location.service';
import { UtilService } from '../util/util.service';
import { IUser } from '../../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  packages: Array<IPackage> = [];
  packagesEdited: Array<IPackageDelivered> = [];
  pckgsID = 'packages';
  pckgsEditedID = 'packagesedited';
  loading = new LoadingController();
  user: any;

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private dialog: Dialogs,
    private location: LocationService,
    private util: UtilService
  ) {
  }

  // Returns the length of the packages edited Array
  getPackagesEditedSize(): number {
    return this.packagesEdited.length;
  }

  // Returns the packages from the server using http request
  async getPackagesFromServer(): Promise<any> {
    const user: IUser = await this.getUser();
    HTTPOPTIONS.params = new HttpParams()
      .append('user', user.username)
      .append('pass', user.password)
      .append('place', user.location.place)
      .append('latitude', user.location.latitude.toString())
      .append('longitude', user.location.longitude.toString())
      .append('time', user.time);
    return await this.http.get(`${SERVER_URL}${API_URL}${GET_URL}`, HTTPOPTIONS).toPromise().then(data => data).catch(err => err);
  }

  // Stores all the packages locally
  async storePackagesLocally() {
    await this.util.loadingStart();
    if (!this.util.networkConnection()) {
      await this.dialog.alert('No hay coneccion a internet, por favor revisar las conecciones.', 'Alerta');
      await this.util.loadingStop();
    } else {
      const data = await this.getPackagesFromServer();
      if (data.nodes) {
        this.packages = data.nodes.map(e => this.getPackageObj(e.node));
        const pckgs = await this.storage.saveObjLocally(this.packages, this.pckgsID).then(e => true).catch(err => false);
        const pckgsEdit = await this.storage.saveObjLocally(this.packagesEdited, this.pckgsEditedID).then(e => true).catch(err => false);
        await this.util.loadingStop();
        return pckgs && pckgsEdit;
      } else {
        await this.util.loadingStop();
        await this.dialog.alert('Ocurrio un error en la carga de la informacion.', 'Alerta');
      }
    }
  }

  // Function called when the user wants to start the route
  async dataStartDay() {
    await this.storePackagesLocally();
  }

  // Function called when the user wants to finish the route
  async dataEndDay(): Promise<boolean> {
    await this.util.loadingStart();
    if (this.util.networkConnection()) {
      // Network Connection
      const result = await this.uploadToServer(this.packagesEdited.map(obj => this.mapPackagesEdited(obj)));
      if (result) {
        await this.removeData();
        this.packages = [];
        this.packagesEdited = [];
        await this.util.loadingStop();
        await this.dialog.alert('Dia Finalizado', 'Confirmacion');
        return true;
      } else {
        // Fail Upload
        await this.util.loadingStop();
        await this.dialog.alert('Ocurrio un error al intentar subir la informacion');
        return false;
      }
    } else {
      // No network Connection
      await this.util.loadingStop();
      await this.dialog.alert('No hay coneccion a internet por favor conectarse a una red');
      return false;
    }
  }

  mapPackagesEdited(obj) {
    return {
      nid: obj.package.nid,
      id: obj.package.id_paquete,
      status: obj.package.estado,
      receiver: obj.receiver,
      others: obj.specify,
      description: obj.description,
      time: obj.time,
      place: obj.location.place,
      latitude: obj.location.latitude.toString(),
      longitude: obj.location.longitude.toString(),
    };
  }

  // Function called when the user open the app but it is not finished the day
  async continueMyday() {
    await this.util.loadingStart();
    this.packages = await this.storage.getObjLocally(this.pckgsID);
    const pckgEdi = await this.storage.getObjLocally(this.pckgsEditedID);
    this.packagesEdited = (!pckgEdi) ? [] : pckgEdi;
    await this.util.loadingStop();
  }

  // Remove all the data from the local storage
  async removeData() {
    await this.storage.removeData(this.pckgsEditedID);
    await this.storage.removeData(this.pckgsID);
  }

  async removeDataFromId(id: string) {
    return await this.storage.removeData(id);
  }

  // Check if exist data locally
  async existData() {
    await this.util.loadingStart();
    if (!await this.storage.getObjLocally(this.pckgsID)) {
      await this.util.loadingStop();
      return false;
    } else {
      await this.util.loadingStop();
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
      nid: obj[`nid`],
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

  // Check if there are packages edited stored locally
  async existEdited(id: string) {
    await this.util.loadingStart();
    const obj = this.packagesEdited.find((e, i) => e.package.id_paquete.includes(id));
    if (!obj) {
      await this.util.loadingStop();
      return false;
    }
    await this.util.loadingStop();
    return obj;
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
    return await this.storage.saveObjLocally(this.packages, this.pckgsID).then(e => true).catch(err => false);
  }

  // Finds the index of a package Edited if exits
  async findsPackageEdited(packageEdited: IPackageDelivered) {
    await this.util.loadingStart();
    let index: any = false;
    this.packagesEdited.find((e, i) => {
      if (e.package.id_paquete.includes(packageEdited.package.id_paquete)) {
        index = i;
        return true;
      }
    });
    await this.util.loadingStop();
    return index;
  }

  // Save a Package edited
  async savePackageEdited(packageEdited: IPackageDelivered) {
    await this.util.loadingStart();
    const index: any = await this.findsPackageEdited(packageEdited);
    if (isBoolean(index)) {
      this.packagesEdited.push(packageEdited);
      await this.util.loadingStop();
      // await this.dialog.alert(JSON.stringify(this.packagesEdited));
      if (await this.storage.saveObjLocally(this.packagesEdited, this.pckgsEditedID).then(e => true).catch(err => false)) {
        return await this.setPackageEditedStatusInPcksArray(packageEdited);
      }
    } else {
      await this.util.loadingStop();
      const result1 = await this.dialog.confirm('El paquete ya fue editado anteriormente, desea continuar ?', 'Alerta')
        .then((e) => e.toString().includes('1'));
      if (result1) {
        await this.util.loadingStart();
        this.packagesEdited[index] = packageEdited;
        await this.util.loadingStop();
        if (await this.storage.saveObjLocally(this.packagesEdited, this.pckgsEditedID).then(e => true).catch(err => false)) {
          return await this.setPackageEditedStatusInPcksArray(packageEdited);
        }
      }
      return false;
    }
  }

  // Function called to submit the packages edited
  async submitPackageEdited(packageDelivered: IPackageDelivered) {
    await this.util.loadingStart();
    if (await this.savePackageEdited(packageDelivered)) {
      if (this.util.networkConnection()) {
        const place = await this.location.getPlace(packageDelivered.location.latitude, packageDelivered.location.longitude);
        packageDelivered.location.place = (place === null) ? '' : place;
        if (await this.uploadToServer(this.packagesEdited.map(obj => this.mapObject(obj)))) {
          await this.removeDataFromId(this.pckgsEditedID);
          this.packagesEdited = [];
        }
      }
      await this.storage.saveObjLocally(this.packages, this.pckgsID);
      const value = await this.afterSaving(true);
      await this.util.loadingStop();
      return value;
    }
    await this.util.loadingStop();
  }

  mapObject(obj) {
    return {
      nid: obj.package.nid,
      id: obj.package.id_paquete,
      status: obj.package.estado,
      receiver: obj.receiver,
      others: obj.specify,
      description: obj.description,
      time: obj.time,
      place: obj.location.place,
      latitude: obj.location.latitude.toString(),
      longitude: obj.location.longitude.toString(),
    };
  }

  // Shows a message depending in the value
  async afterSaving(value: boolean) {
    if (value) {
      await this.dialog.alert('Se ha guardado con exito', 'Confirmacion');
      return true;
    } else {
      await this.dialog.alert('Ocurrio un Error al salvar la informacion', 'Alerta');
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
        'Content-Type': 'application/json',
      })
    };
    return await this.http.post(
      `${SERVER_URL}${API_URL}${POST_URL}`,
      JSON.stringify({ edited: bodies, user: await this.getUser() }),
      httpOptions)
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }

  // Storage
  async getUser(): Promise<IUser> {
    const u: IUser = await this.storage.getObjLocally(environment.loginID);
    u.location = await this.location.getLocation();
    u.location.place = await this.location.getPlace(u.location.latitude, u.location.longitude);
    return u;
  }
}
