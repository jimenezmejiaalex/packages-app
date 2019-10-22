import { Injectable } from '@angular/core';
import { loading } from '../../../environments/environment.prod';
import {Network} from '@ionic-native/network/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  loading;

  // Constructor
  constructor(private network: Network, private diagnostic: Diagnostic) { this.loading = loading; }

  // Show a loading widget
  async loadingStart() {
    const result = await this.loading.create();
    await result.present();
  }

  // Stop the loading widget
  async loadingStop() {
    await this.loading.dismiss();
  }

  // Check the network connection
  networkConnection(): boolean {
    return (this.network.type !== this.network.Connection.NONE);
  }

  // Get diagnostic
  getDiagnostic() {
    return this.diagnostic;
  }
}
