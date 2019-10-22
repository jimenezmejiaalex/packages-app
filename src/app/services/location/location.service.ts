import {Injectable} from '@angular/core';
import {Geolocation, Geoposition} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult} from '@ionic-native/native-geocoder/ngx';
import {ILocation} from '../../interfaces/ILocation';
import {isBoolean} from 'util';
import {Device} from '@ionic-native/device/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {LocationAccuracy} from '@ionic-native/location-accuracy/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  user: any;
  locationCoords: any;
  timeTest: any;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private device: Device,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
  ) {
    this.locationCoords = {
      latitude: '',
      longitude: '',
      accuracy: '',
      timestamp: ''
    };
    this.timeTest = Date.now();
  }

  async getLocation(): Promise<ILocation> {
    const options = {enableHighAccuracy: true};
    const data: any = await this.geolocation.getCurrentPosition(options).then((resp: Geoposition) => resp.coords).catch(() => false);
    return (isBoolean(data)) ? null : {latitude: data.latitude, longitude: data.longitude, place: ''};
  }

  async getPlace(latitude: number, longitude: number): Promise<string> {
    const data: NativeGeocoderResult = await this.nativeGeocoder.reverseGeocode(latitude, longitude, this.options)
      .then((result: NativeGeocoderResult[]) => result[0])
      .catch(() => null);
    const place = `${data.countryName} ${data.administrativeArea} ${data.subAdministrativeArea} ${data.subLocality} ${data.thoroughfare}`;
    return (isBoolean(data)) ? null : place;
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
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

}
