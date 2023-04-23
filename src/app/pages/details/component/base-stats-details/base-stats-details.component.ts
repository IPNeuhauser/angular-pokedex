import { Component, Input, OnChanges } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemonDetails';

@Component({
  selector: 'app-base-stats-details',
  templateUrl: './base-stats-details.component.html',
  styleUrls: ['./base-stats-details.component.css', './base-stats-details.responsive.component.css', '../../../../../pokemon.css']
})
export class BaseStatsDetailsComponent implements OnChanges{
  @Input() pokemon : PokemonDetail = {
    name: '',
    id: 0,
    types: [],
    abilities:[],
    height:0,
    weight:0,
    moves:[],
    stats: [
      {
        base_stat: 0,
        stat: {
          name: 'teste'
        }
      }
    ],
  }
  maxStat:number = 0;
  percent:number = 0;
  barStyle: string = '';

  ngOnChanges(): void {
    for(let i = 0; i < this.pokemon.stats.length; i++){
      if(this.pokemon.stats[i].base_stat > this.maxStat){
        this.maxStat = this.pokemon.stats[i].base_stat;
      }
    }
  }

  chooseColor(value:number):string{
    let text;
    this.percent = (value / this.maxStat) * 100;

    if(this.percent > 50){
      text = 'green';
    } else {
      text = 'red';
    }
    return text;
  }

}
