import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aboutData'
})
export class AboutDataPipe implements PipeTransform {

  transform(value: number): string {
    value /= 10;
    return value.toFixed(1);
  }

}
