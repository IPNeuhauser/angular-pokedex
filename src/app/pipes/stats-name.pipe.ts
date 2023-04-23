import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statsName'
})
export class StatsNamePipe implements PipeTransform {

  transform(name: string): string {
    if(name == 'special-attack'){
      name = 'sp. atk';
    }

    if(name == 'special-defense'){
      name = 'sp. def';
    }

    return name;
  }

}
