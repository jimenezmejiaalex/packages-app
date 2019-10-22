import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {loading} from '../../environments/environment.prod';
import {UserService} from '../services/user/user.service';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {isBoolean} from 'util';
import {LocationService} from '../services/location/location.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.page.html',
  styleUrls: ['./modal-login.page.scss'],
})
export class ModalLoginPage implements OnInit {
  constructor(
    navParams: NavParams,
    private modalCtrl: ModalController,
    private userService: UserService,
    private location: LocationService,
    private dialog: Dialogs
  ) {
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

  async dismiss(data) {
    await this.modalCtrl.dismiss({data});
  }

  async dismissLogin() {
    await this.dismiss(false);
  }

  async login(form: NgForm) {
    const [user, password] = [form.value.user, form.value.password];
    if ( user.length <= 0 || password.length <= 0) {
      await this.dialog.alert('Por favor llenar todos los campos requeridos', 'Atención');
    } else {
      const result = await this.userService.logIn(form.value.user, form.value.password);
      if (isBoolean(result)) {
       await this.dialog.alert('Ocurrió un error al iniciar sesión por favor intente de nuevo', 'Error');
       } else {
        await this.loadingStart();
        if (await result.toPromise().then(e => true).catch(e => false)) {
           await this.loadingStop();
           this.dismiss(this.userService.user);
        } else {
           await this.loadingStop();
           await this.dialog.alert('Ocurrió un error al iniciar sesión por favor intente de nuevo', 'Error');
        }
       }
    }
  }

  async ngOnInit() {
    await this.userService.networkEnabled();
    await this.location.checkGPSPermission();
  }
}
