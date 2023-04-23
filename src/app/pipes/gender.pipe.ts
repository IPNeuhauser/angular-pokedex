import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number, type: string): number {
    if(type == 'F'){
      value = (value/8) * 100;
      value = +value.toFixed(1);
    } else {
      value = (1 - value/8) * 100;
      value = +value.toFixed(1);
    }
    return value;
  }

}
