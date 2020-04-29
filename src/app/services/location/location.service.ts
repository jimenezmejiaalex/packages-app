import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ILocation } from '../../interfaces/ILocation';
import { isBoolean } from 'util';
import { Device } from '@ionic-native/device/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

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
    await this.checkGPSPermission();
    const options = { enableHighAccuracy: true };
    const data: any = await this.geolocation.getCurrentPosition(options).then((resp: Geoposition) => resp.coords).catch(() => false);
    return (isBoolean(data)) ? null : { latitude: data.latitude, longitude: data.longitude, place: '' };
  }

  async getPlace(latitude: number, longitude: number): Promise<string> {
    const data: NativeGeocoderResult = await this.nativeGeocoder.reverseGeocode(latitude, longitude, this.options)
      .then((result: NativeGeocoderResult[]) => result[0])
      .catch(() => null);
    let place = '';
    if (data !== null) {
      place = `${data.countryName} ${data.administrativeArea}
        ${data.subAdministrativeArea} ${data.subLocality} ${data.thoroughfare}`;
    }
    return (isBoolean(data)) ? null : place;
  }

  async checkGPSPermission() {
    const result = await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION);
    if (result.hasPermission) {
      await this.askToTurnOnGPS();
    } else {
      await this.requestGPSPermission();
    }
  }

  async requestGPSPermission() {
    const canRequest = await this.locationAccuracy.canRequest();
    if (canRequest) {
    } else {
      await this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION);
      await this.askToTurnOnGPS();
    }
  }

  async askToTurnOnGPS() {
    await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
    await this.getLocationCoordinates();
  }

  async getLocationCoordinates() {
    const resp = await this.geolocation.getCurrentPosition();
    this.locationCoords.latitude = resp.coords.latitude;
    this.locationCoords.longitude = resp.coords.longitude;
    this.locationCoords.accuracy = resp.coords.accuracy;
    this.locationCoords.timestamp = resp.timestamp;
  }

}
