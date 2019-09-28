import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPackage } from '../packages/interfaces/Package';
import { PackagesService } from '../packages/api/packages.service';
import { IPackageDelivered } from '../packages/interfaces/IPackageDelivered';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-packages-info',
  templateUrl: './packages-info.page.html',
  styleUrls: ['./packages-info.page.scss'],
})
export class PackagesInfoPage implements OnInit {

  status: string = ' ';

  // Variables to use in the NGIF
  checked: boolean = false;
  isDelivered: boolean = false;
  isOther: boolean = false;

  // Object Package Delivered to send
  packageDelivered: IPackageDelivered;

  // Variables of Package Delivered
  receiver: string= '';
  other: string = '';
  description: string = '';

  estados: Array<string> = [
    'Bodega',
    'En ruta',
    'Rural',
    'Entregado',
    'Rechazado',
    'Devolucion',
    'Ausente'
  ];

  receivers: Array<string> = [
    'Titular',
    'Padres',
    'Hermanos',
    'Seguridad',
    'Otros',
  ]

  package: IPackage;

  // watch network for a disconnection
  disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');
  });

  constructor(private route: ActivatedRoute, private router: Router, private dataService: PackagesService, private network: Network) {
  }

  savePackageDelivered(){
    this.dataService.savePackageEdited({
      package: this.package,
      receiver: 'receiver',
      description: 'description',
    });
  }

  radioChecked(value: string): void{
    this.isDelivered = value.toLowerCase().includes('entregado');
  }

  radioCheckedOther(value: string): void {
    this.isOther = value.toLowerCase().includes('otros')
  }

  statusDelivered(): boolean {
    console.log(this.status);
    return this.status === 'entregado';
  }

  checkStatus(item:string){
    console.log(
      `Package:
      ${this.package.estado.toLowerCase()} -
      ${item.toLowerCase()} =
      ${item.toLowerCase().includes(this.package.estado.toLowerCase())}`);

    return item.toLowerCase().includes(this.package.estado.toLowerCase());
  }

  submitInfo(){

    this.validateInfo();
  }

  validateInfo(){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.package = <IPackage> this.router.getCurrentNavigation().extras.state.pckg;
      console.log(this.package);
    });
  }

}
