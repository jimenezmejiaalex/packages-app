import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPackage} from '../packages/interfaces/Package';
import {PackagesService} from '../packages/api/packages.service';
import {IPackageDelivered} from '../packages/interfaces/IPackageDelivered';
import {AlertController} from '@ionic/angular';


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

  // Content for HTML
  estados: Array<string> = [
    'Bodega',
    'En ruta',
    'Rural',
    'Entregado',
    'Rechazado',
    'Devolucion',
    'Ausente'
  ];

  estadosToSend = {
    bodega: 'Bodega',
    'en ruta': 'En ruta',
    rural: 'Rural',
    entregado: 'Entregado',
    rechazado: 'Rechazado',
    devolucion: 'Devolucion',
    ausente: 'Ausente'
  };

  receivers: Array<string> = [
    'Titular',
    'Padres',
    'Hermanos',
    'Seguridad',
    'Otros',
  ];

  receiversToSend = {
    titular: 'Titular',
    padres: 'Padres',
    hermanos: 'Hermanos',
    seguridad: 'Seguridad',
    otros: 'Otros',
  };

  // Check if is submittable
  isSubmittable = true;


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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: PackagesService,
    public alertController: AlertController) {
    this.callService();
  }

  changeIsSubmittableValue(): boolean {
    if ((!this.isDelivered) && this.description.length > 0 && this.status.length > 0) {
      return false;
    } else {
      if ((!this.isOther) && this.receiver.length > 0 && this.description.length > 0) {
        return false;
      } else {
        if (this.other.length > 0 && this.description.length > 0) {
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

  async submitInfo() {
    this.setPackage();
    const result = await this.dataService.submitPackageEdited(this.packageDelivered);
    if (result) {
      await this.router.navigate(['packages']);
    }
  }

  setPackage() {
    this.package.estado = this.estadosToSend[this.status];
    this.packageDelivered = {
      package: this.package,
      receiver: (this.isDelivered) ? this.receiversToSend[this.receiver] : '',
      specify: (this.isOther) ? this.other : '',
      description: this.description
    };
  }

  callService() {
    this.route.queryParams.subscribe(params => {
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
