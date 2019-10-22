import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL, environment, POST_URL, SERVER_URL} from '../../../environments/environment.prod';
import {ILocation} from '../../interfaces/ILocation';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {LocationService} from '../location/location.service';
import {UtilService} from '../util/util.service';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;

  constructor(
    private http: HttpClient,
    private dialog: Dialogs,
    private location: LocationService,
    private util: UtilService,
    private storage: StorageService
  ) {
  }

  async wifiEnabled(): Promise<boolean> {
    return this.util.getDiagnostic().isWifiEnabled();
  }

  async networkEnabled() {
    if (!await this.wifiEnabled()) {
      await this.dialog.alert('Por favor activar las conexiones de Internet para sincronizar la información');
      this.util.getDiagnostic().switchToWifiSettings();
      this.util.getDiagnostic().switchToMobileDataSettings();
    }
  }

  async logIn(user: string, pass: string): Promise<any> {
    if (!this.util.networkConnection()) {
      await this.dialog.alert('No hay conexión a Internet por favor revise sus conexiones e intente de nuevo');
      return false;
    } else {
      await this.util.loadingStart();
      const loc: ILocation = await this.location.getLocation();
      loc.place = await this.location.getPlace(loc.latitude, loc.longitude);
      this.user = {username: user, password: pass, location: loc, time: new Date().toString()};
      const body = JSON.stringify(this.user);
      const URL = `${SERVER_URL}${API_URL}${POST_URL}`;
      await this.util.loadingStop();
      return this.http.post(URL, body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      });
    }
  }

  async removeUserInfo() {
    return await this.storage.removeData(environment.loginID);
  }

  async getUser() {
    return await this.storage.getObjLocally(environment.loginID);
  }

  async saveUser(data) {
    await this.storage.saveObjLocally(data, environment.loginID);
  }
}
