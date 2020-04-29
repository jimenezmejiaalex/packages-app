import {Component, OnInit} from '@angular/core';
import {PackagesService} from '../services/api/packages.service';
import {IPackage} from '../interfaces/Package';
import {ModalController} from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {UserService} from '../services/user/user.service';
import {ModalLoginPage} from '../modal-login/modal-login.page';
import {UtilService} from '../services/util/util.service';

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
    private router: Router,
    private dialog: Dialogs,
    private userService: UserService,
    private modalController: ModalController,
    private util: UtilService
  ) {
  }

  pendingToUploadSize(): number {
    return this.pckgS.getPackagesEditedSize();
  }

  async gotoPackageInfo(p: IPackage) {
    const pack = await this.pckgS.existEdited(p.id_paquete);
    let obj = {};
    if (!pack) {
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
    }
    const navigationExtras: NavigationExtras = {state: obj};
    await this.router.navigate(['package-info'], navigationExtras);
  }

  async checkData() {
    if (await this.pckgS.existData()) {
      await this.pckgS.continueMyday();
      this.getAPIPackages();
    }
  }

  async getAPIPackages() {
    await this.util.loadingStart();
    this.packages = await this.pckgS.getPackages();
    await this.util.loadingStop();
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
    await this.util.loadingStart();
    await this.pckgS.dataStartDay();
    await this.getAPIPackages();
    await this.util.loadingStop();
  }

  async logIn(): Promise<boolean> {
    let data: any = await this.userService.getUser();
    if (!data) {
      data = await this.presentModal();
      if (!data) {
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
      while (!await this.logIn()) {
      }
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({component: ModalLoginPage});
    await modal.present();
    const {data} = await modal.onWillDismiss();
    return data;
  }

  async ngOnInit() {
    while (!await this.logIn()) {
    }
    await this.checkData();
  }
}
