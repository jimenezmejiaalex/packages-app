import { Pipe, PipeTransform } from '@angular/core';
import { IPackage } from "../packages/interfaces/Package";
@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: Array<any>, text: string): Array<any> {
    //let values: Array<string> = ;
      //e['id_paquete'].toUpperCase().includes(text) || e['nombre_de_afiliado']
    if(!text){
      return array;
    }
    text = text.toUpperCase();
    return array.filter((e: IPackage) => Object.values(e).some(e => e.toUpperCase().includes(text)));
  }

}
