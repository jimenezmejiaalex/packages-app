import {HttpHeaders} from '@angular/common/http';
import {LoadingController} from '@ionic/angular';

export const environment = {
  production: true,
  loginID: 'login'
};
export const SERVER_URL = 'http://cycmultiservicios.com';
export const API_URL = '/tome';
export const GET_URL = '/paquetes';
export const POST_URL = '/mt_cambio';
export const POST_USER = '/paentro';
export const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
  params: {}
};

export let loading = new LoadingController();
