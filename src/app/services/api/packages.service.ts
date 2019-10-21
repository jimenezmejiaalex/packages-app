import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {IPackageDelivered} from '../../interfaces/IPackageDelivered';
import {Storage} from '@ionic/storage';
import {Network} from '@ionic-native/network/ngx';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {IPackage} from '../../interfaces/Package';
import {LoadingController} from '@ionic/angular';
import {isBoolean} from 'util';
import {BodyPost} from '../../interfaces/bodyPost';
import {API_URL, environment, GET_URL, HTTPOPTIONS, POST_URL, SERVER_URL} from '../../../environments/environment.prod';
import {ILocation} from '../../interfaces/ILocation';
import {UserService} from '../user/user.service';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult} from '@ionic-native/native-geocoder/ngx';

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
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  user: any;
  locationCoords: any;
  timeTest: any;
  constructor(
    private http: HttpClient,
    private storage: Storage,
    public network: Network,
    public dialog: Dialogs,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    ) {
    this.locationCoords = {
      latitude: '',
      longitude: '',
      accuracy: '',
      timestamp: ''
    };
    this.timeTest = Date.now();
  }

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
  async getPackagesFromServer(): Promise<any> {
    HTTPOPTIONS.params = new HttpParams().set('user', JSON.stringify(await this.getUser()));
    return this.http.get(`${SERVER_URL}${API_URL}${GET_URL}`, HTTPOPTIONS).toPromise();
  }

  // Stores all the packages locally
  async storePackagesLocally() {
    await this.loadingStart();
    if (!this.networkConnection()) {
      await this.dialog.alert('No hay coneccion a internet, por favor revisar las conecciones.', 'Alerta');
      await  this.loadingStop();
      return;
    } else {
      const data = await this.getPackagesFromServer();
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
  async dataEndDay(): Promise<boolean> {
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
        await this.dialog.alert('Dia Finalizado', 'Confirmacion');
        return true;
      } else {
        // Fail Upload
        await this.loadingStop();
        await this.dialog.alert('Ocurrio un error al intentar subir la informacion');
        return false;
      }
    } else {
      // No network Connection
      await this.loadingStop();
      await this.dialog.alert('No hay coneccion a internet por favor conectarse a una red');
      return false;
    }
  }

  // Function called when the user open the app but it is not finished the day
  async continueMyday() {
    await this.loadingStart();
    this.packages = await this.getObjLocally(this.pckgsID);
    const pckgEdi = await this.getObjLocally(this.pckgsEditedID);
    this.packagesEdited = (!pckgEdi) ? [] : pckgEdi;
    // await this.dialog.alert(JSON.stringify(this.packagesEdited));
    await this.loadingStop();
  }

  // Remove all the data from the local storage
  removeData() {
    this.storage.remove(this.pckgsEditedID).then(r => r);
    this.storage.remove(this.pckgsID).then(r => r);
  }

  async removeDataFromId(id: string) {
    return await this.storage.remove(id).then(r => true).catch(e => false);
  }

  // Check if exist data locally
  async existData() {
    await this.loadingStart();
    const pckgs = await this.getObjLocally(this.pckgsID);
    // const pckgsE = await this.getObjLocally(this.pckgsEditedID);
    // if (!pckgs || !pckgsE) {
    if (!pckgs) {
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
    // this.dialog.alert(obj.nid);
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

  // Save any object locally it needs the id for storing
  async saveObjLocally(obj: any, id: string) {
    return await this.storage.set(id, JSON.stringify(obj));
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
    let value: boolean;
    // const result = await this.afterSaving(await this.savePackageEdited(packageDelivered));
    if (await this.savePackageEdited(packageDelivered)) {
       if ( await this.uploadToServer( this.packagesEdited.map(obj => this.mapObject(obj))) ) {
         // await this.dialog.alert(JSON.stringify(this.packagesEdited));
         await this.removeDataFromId(this.pckgsEditedID);
         this.packagesEdited = [];
       }
       await this.saveObjLocally(this.packages, this.pckgsID);
       value = await this.afterSaving(true);
       await this.loadingStop();
       return value;
    }
  }

  mapObject(obj) {
    return {
      nid: obj.package.nid,
      id: obj.package.id_paquete,
      status: obj.package.estado,
      receiver: obj.receiver,
      others: obj.specify,
      description: obj.description
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
        'Content-Type':  'application/json',
      })
    };
    return await this.http.post(
      `${SERVER_URL}${API_URL}${POST_URL}`,
      JSON.stringify({edited: bodies, user: await this.getUser()}),
      httpOptions)
      .toPromise()
      .then((response) =>  true)
      .catch((err) => false );
  }

  async getUser() {
    const u = await this.getObjLocally(environment.loginID);
    u.location = await this.getLocation();
    u.location.place = await this.getPlace(u.location.latitude, u.location.longitude);
    return u;
  }

  async getLocation(): Promise<ILocation> {
    const options = {enableHighAccuracy : true};
    const data: any = await this.geolocation.getCurrentPosition(options).then((resp: Geoposition) => resp.coords).catch(() => false);
    return (isBoolean(data)) ? null : {latitude: data.latitude , longitude: data.longitude, place: ''};
  }

  async getPlace(latitude: number, longitude: number): Promise<string> {
    const data: NativeGeocoderResult = await this.nativeGeocoder.reverseGeocode(latitude, longitude, this.options)
      .then((result: NativeGeocoderResult[]) => result[0])
      .catch(() => null);
    const place =  `${data.countryName} ${data.administrativeArea} ${data.subAdministrativeArea} ${data.subLocality} ${data.thoroughfare}`;
    return (isBoolean(data)) ? null : place;
  }
}
