import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {Network} from '@ionic-native/network/ngx';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Device } from '@ionic-native/device/ngx';
import {ModalLoginPageModule} from './modal-login/modal-login.module';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ModalLoginPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    Network,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    NativeGeocoder,
    Diagnostic,
    Device,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
