import {Pipe, PipeTransform} from '@angular/core';
import {IPackage} from '../interfaces/Package';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: Array<any>, text: string): Array<any> {
    if (!text) {
      return array;
    }
    text = text.toUpperCase();
    return array.filter((e: IPackage) => Object.values(e).some(e => e.toUpperCase().includes(text)));
  }

}
