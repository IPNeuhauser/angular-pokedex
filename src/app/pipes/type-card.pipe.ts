import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeCard'
})
export class TypeCardPipe implements PipeTransform {

  transform(type: string): string {
    const types:{
      type: string,
      tipo: string,
    }[] = [
      {type: 'grass', tipo:'planta',},
      {type: 'steel', tipo: 'Aço'},
      {type: 'bug', tipo: 'inseto'},
      {type: 'dark', tipo: 'sombrio'},
      {type: 'dragon', tipo: 'dragão'},
      {type: 'electric', tipo: 'elétrico'},
      {type: 'fairy', tipo: 'fada'},
      {type: 'fighting', tipo: 'lutador'},
      {type: 'fire', tipo: 'fogo'},
      {type: 'flying', tipo: 'voador'},
      {type: 'ghost', tipo: 'fantasma'},
      {type: 'ground', tipo: 'terra'},
      {type: 'ice', tipo: 'gelo'},
      {type: 'normal', tipo: 'normal'},
      {type: 'poison', tipo: 'veneno'},
      {type: 'psychic', tipo: 'psíquico'},
      {type: 'rock', tipo: 'rocha'},
      {type: 'water', tipo: 'água'},
    ]

    types.forEach((eType) =>{
      if(eType.type == type){
        type = eType.tipo;
      }
    })

    return type;
  }

}
