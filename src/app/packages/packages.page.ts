import {Component, OnInit} from '@angular/core';
import {PackagesService} from '../services/api/packages.service';
import {IPackage} from '../interfaces/Package';
import {LoadingController, ModalController} from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {UserService} from '../services/user/user.service';
import {ModalLoginPage} from '../modal-login/modal-login.page';
import {loading} from '../../environments/environment.prod';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {

  packages: Array<IPackage> = [];
  searchText = '';
  titleText = 'Listado de Reparto';
  startText = 'Empezar';
  endText = 'Finalizar';
  logged: boolean;
  constructor(
    private pckgS: PackagesService,
    public loadingController: LoadingController,
    private router: Router,
    public dialog: Dialogs,
    private userService: UserService,
    private modalController: ModalController
  ) {}

  pendingToUploadSize(): number {
    return this.pckgS.getPackagesEditedSize();
  }

  async gotoPackageInfo(p: IPackage) {

    const pack = await this.pckgS.existEdited(p.id_paquete);
    let obj = {};
    if (!pack) {
      // this.dialog.alert(JSON.stringify(pack));
      obj = {
        pckg: {
          package: p,
          receiver: '',
          specify: '',
          description: '',
        }
      };
    } else {
      obj = {pckg: pack};
      // this.dialog.alert(JSON.stringify(p));
    }
    const navigationExtras: NavigationExtras = {
      state: obj,
    };
    await this.router.navigate(['package-info'], navigationExtras);
  }

  async checkData() {
    if (await this.pckgS.existData()) {
      // await this.dialog.alert('exist data');
      await this.pckgS.continueMyday();
      this.getAPIPackages();
    }
  }

  async getAPIPackages() {
    // tslint:disable-next-line:no-shadowed-variable
    const loading = await this.loadingController.create();
    await loading.present();
    this.packages = await this.pckgS.getPackages();
    await loading.dismiss();
  }

  search(event) {
    this.searchText = event.detail.value;
  }

  async endMyDay(): Promise<boolean> {
    const result = await this.pckgS.dataEndDay();
    this.getAPIPackages();
    return result;
  }

  async gotoPackagesList() {
    // tslint:disable-next-line:no-shadowed-variable
    const loading = await this.loadingController.create();
    await loading.present();
    await this.pckgS.dataStartDay();
    this.getAPIPackages();
    await loading.dismiss();
  }

  async logIn(): Promise<boolean> {
    let data: any = await this.userService.getUser();
    // await this.dialog.alert(data);
    if ( !data ) {
      data  = await this.presentModal();
      if (!data) {
        // await this.dialog.alert('Back Button');
        return false;
      }
      await this.userService.saveUser(data.data);
    }
    this.logged = true;
    return true;
  }

  async logout() {
    const text = 'A continuación va a salir de su cuenta, se intentara guardar los cambios hasta el momento.\n¿Desea continuar?';
    const type = 'Alerta';
    if (
      await this.dialog.confirm(text, type).then((e) => e.toString().includes('1'))
      && await this.endMyDay()
      && await this.userService.removeUserInfo()
    ) {
      this.logged = !this.logged;
      while (!await this.logIn()) {}
    }
  }

  async presentModal() {

    const modal = await this.modalController.create({ component: ModalLoginPage });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    return data;
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

  async ngOnInit() {
    // await this.loadingStart();
    while (!await this.logIn()) {}
    await this.checkData();
    // await this.loadingStop();
  }


}
