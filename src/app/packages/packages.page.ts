import { Component, OnInit } from '@angular/core';
import { PackagesService } from './api/packages.service';
import { IPackage } from './interfaces/Package';
import { LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {

  packages: Array<IPackage> = [];
  loadedPackages: Array<IPackage> = [];
  searchText: string = '';
  titleText:string = 'Listado de Reparto';
  constructor(private pckgS: PackagesService, public loadingController: LoadingController, private router: Router) {
    this.getAPIPackages()
  }

  gotoPackageInfo(p: IPackage){
    console.log(p);
    let navigationExtras: NavigationExtras = {
      state: {
        pckg: p,
      }
    }
    this.router.navigate(['package-info'], navigationExtras);
  }

  async getAPIPackages() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.pckgS.getPackages().subscribe((data) => {
      this.packages = data['nodes'].map(e => {
        return this.getPackageObj(e['node'])
      });
      this.loadedPackages = this.packages;
      loading.dismiss();
    });
    //this.packages = await this.pckgS.getPackages()['nodes'].map(e => {
      //return this.getPackageObj(e['node'])
    //});
    //this.loadedPackages = this.packages;
    //loading.dismiss();
  }

  search(event){
   this.searchText = event.detail.value;
  }

  getPackageObj(obj){
    return {
      id_paquete:         obj['ID Paquete'],
      peso:               obj['Peso'],
      estado:             obj['Estado'],
      direccion:          obj['Dirección'],
      poblacion:          obj['Población'],
      nombre_de_afiliado: obj['Nombre de afiliado'],
      codigo_de_afiliado: obj['Código de afiliado'],
      telefono:           obj['Teléfono'],
      celular:            obj['Celular'],
      detalles:           obj['Detalles'],
    }
  }

  ngOnInit() {
  }


}
