import {Component, OnInit} from '@angular/core';
import {PackagesService} from './api/packages.service';
import {IPackage} from './interfaces/Package';
import {LoadingController} from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';
import {Dialogs} from '@ionic-native/dialogs/ngx';

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
  constructor(
    private pckgS: PackagesService,
    public loadingController: LoadingController,
    private router: Router,
    public dialog: Dialogs
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
      await this.pckgS.continueMyday();
      this.getAPIPackages();
    }
  }

  async getAPIPackages() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.packages = await this.pckgS.getPackages();
    await loading.dismiss();
  }

  search(event) {
    this.searchText = event.detail.value;
  }

  async endMyDay() {
    await this.pckgS.dataEndDay();
    this.getAPIPackages();
  }

  async gotoPackagesList() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.pckgS.dataStartDay();
    this.getAPIPackages();
    await loading.dismiss();
  }

  async ngOnInit() {
    await this.checkData();
  }


}
