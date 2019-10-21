import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PackagesService} from '../api/packages.service';
import {API_URL, environment, loading, POST_URL, SERVER_URL} from '../../../environments/environment.prod';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {ILocation} from '../../interfaces/ILocation';
import {isBoolean} from 'util';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult} from '@ionic-native/native-geocoder/ngx';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {Device} from '@ionic-native/device/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {LocationAccuracy} from '@ionic-native/location-accuracy/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  user: any;
  locationCoords: any;
  timeTest: any;

  constructor(
    private http: HttpClient ,
    private apiService: PackagesService,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private dialog: Dialogs,
    private device: Device,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
    private diagnostic: Diagnostic
  ) {
    this.locationCoords = {
      latitude: '',
      longitude: '',
      accuracy: '',
      timestamp: ''
    };
    this.timeTest = Date.now();
  }

  async wifiEnabled(): Promise<boolean> {
    return this.diagnostic.isWifiEnabled();
  }

  async networkEnabled() {
    if (!await this.wifiEnabled()) {
      await this.dialog.alert('Por favor activar las conexiones de Internet para sincronizar la información');
      this.diagnostic.switchToWifiSettings();
      this.diagnostic.switchToMobileDataSettings();
    }
  }


  // Show a loading widget
  async loadingStart() {
    const result = await loading.create();
    await result.present();
  }

  // Stop the loading widget
  async loadingStop() {
    await loading.dismiss();
  }

  async logIn(user: string, pass: string): Promise <any> {
    if (!this.apiService.networkConnection()) {
      await this.dialog.alert('No hay conexión a Internet por favor revise sus conexiones e intente de nuevo');
      return false;
    } else {
      await this.loadingStart();
      const loc: ILocation =  await this.getLocation();
      loc.place = await this.getPlace(loc.latitude, loc.longitude);
      this.user = {username: user, password: pass, location: loc, time: new Date().toString()};
      const body = JSON.stringify(this.user);
      const URL = `${SERVER_URL}${API_URL}${POST_URL}`;
      await this.loadingStop();
      return this.http.post(URL, body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      });
    }
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

  async saveUser(data: any) {
    await this.apiService.saveObjLocally(data, environment.loginID);
  }

  async getUser() {
    return await this.apiService.getObjLocally(environment.loginID);
  }

  async removeUserInfo() {
    return await this.apiService.removeDataFromId(environment.loginID);
  }

  private loginCorrect(data) {

  }

  private loginFailed(error: any) {

  }


  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
          // If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {
          // If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        // console.log();
      } else {
        // Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              // Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error);
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates();
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  // Methods to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch( ( error) => {
      alert('Error getting location' + error);
    });
  }

}
