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
export const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
  params: {}
};
export let loading = new LoadingController();
// tslint:disable-next-line:variable-name
export const _estados: Array<string> = [
  'Entregado',
  'Rechazado',
  'Devolucion',
  'Ausente'
];
// tslint:disable-next-line:variable-name
export const _estadosToSend = {
  entregado: 'Entregado',
  rechazado: 'Rechazado',
  devolucion: 'Devolucion',
  ausente: 'Ausente'
};
// tslint:disable-next-line:variable-name
export const _receivers: Array<string> = [
  'Titular',
  'Padres',
  'Hermanos',
  'Seguridad',
  'Otros',
];
// tslint:disable-next-line:variable-name
export const _receiversToSend = {
  titular: 'Titular',
  padres: 'Padres',
  hermanos: 'Hermanos',
  seguridad: 'Seguridad',
  otros: 'Otros',
};
