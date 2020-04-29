import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPackage } from '../interfaces/Package';
import { PackagesService } from '../services/api/packages.service';
import { IPackageDelivered } from '../interfaces/IPackageDelivered';
import { _estados, _estadosToSend, _receivers, _receiversToSend, loading } from '../../environments/environment.prod';
import { ILocation } from '../interfaces/ILocation';
import { LocationService } from '../services/location/location.service';


@Component({
  selector: 'app-packages-info',
  templateUrl: './packages-info.page.html',
  styleUrls: ['./packages-info.page.scss'],
})
export class PackagesInfoPage implements OnInit {

  status = '';

  // Variables to use in the ngIf
  checked = false;
  isDelivered = false;
  isOther = false;

  // Object Package Delivered to send
  packageDelivered: IPackageDelivered;

  // Variables of Package Delivered
  receiver = '';
  other = '';
  description = '';

  // Check if is submittable
  isSubmittable = true;

  // Package
  package: IPackage = {
    id_paquete: '',
    peso: '',
    estado: '',
    direccion: '',
    poblacion: '',
    nombre_de_afiliado: '',
    codigo_de_afiliado: '',
    telefono: '',
    celular: '',
    detalles: '',
  };

  // HTMl variables
  estados = [];
  estadosToSend = {};
  receivers = [];
  receiversToSend = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: PackagesService,
    private location: LocationService,
  ) {
    this.estados = _estados;
    this.estadosToSend = _estadosToSend;
    this.receivers = _receivers;
    this.receiversToSend = _receiversToSend;
    this.callService();
  }

  changeIsSubmittableValue(): boolean {
    if ((!this.isDelivered) && this.status.length > 0) {
      return false;
    } else {
      if ((!this.isOther) && this.receiver.length > 0) {
        return false;
      } else {
        if (this.other.length > 0) {
          return false;
        }
      }
    }
    return true;
  }

  radioChecked(value: string): void {
    this.isDelivered = value.toLowerCase().includes('entregado');
    this.status = value.toLowerCase();
    this.isSubmittable = this.changeIsSubmittableValue();
  }

  radioCheckedOther(value: string): void {
    this.isOther = value.toLowerCase().includes('otros');
    this.receiver = value.toLowerCase();
    this.isSubmittable = this.changeIsSubmittableValue();
  }

  textAreaChanged(value: string) {
    this.description = value;
    this.isSubmittable = this.changeIsSubmittableValue();
  }

  otherInputChanged(value: string) {
    this.other = value;
    this.isSubmittable = this.changeIsSubmittableValue();
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

  async submitInfo() {
    this.loadingStart();
    await this.setPackage();
    const result = await this.dataService.submitPackageEdited(this.packageDelivered);
    if (result) {
      await this.router.navigate(['packages']);
    }
    this.loadingStop();
  }

  async setPackage() {
    let loc: ILocation = null;
    /*
    not found => location
    found => 1: * -> entregado(location)      2:  entregado -> other (found.location)
    */
    const found = this.dataService.packagesEdited.find(e => (e.package.id_paquete.includes(this.package.id_paquete)));
    if (found) {
      if (
        this.estadosToSend[this.status] === _estadosToSend.entregado &&
        !Object.keys(_estadosToSend)
          .some(e => _estadosToSend[e] === _estadosToSend.entregado)
      ) {
        loc = found.location;
      } else {
        loc = await this.location.getLocation();
      }
    } else {
      loc = await this.location.getLocation();
    }
    this.package.estado = this.estadosToSend[this.status];
    this.packageDelivered = {
      package: this.package,
      receiver: (this.isDelivered) ? this.receiversToSend[this.receiver] : '',
      specify: (this.isOther) ? this.other : '',
      description: this.description,
      time: new Date().toString(),
      location: loc,
    };
  }

  callService() {
    this.route.queryParams.subscribe(() => {
      const obj = this.router.getCurrentNavigation().extras.state.pckg;
      this.package = (obj.package as IPackage);
      this.receiver = obj.receiver;
      this.other = obj.specify;
      this.description = obj.description;
    });
  }

  ngOnInit() {
  }
}
