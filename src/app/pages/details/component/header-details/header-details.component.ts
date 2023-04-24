import { Component, Input, AfterContentChecked } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemonDetails';

@Component({
  selector: 'app-header-details',
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.css', '../../../../../pokemon.css', './header-details.responsive.component.css']
})
export class HeaderDetailsComponent implements AfterContentChecked{
  @Input() pokemon: PokemonDetail ={
    abilities: [],
    height: 0,
    id: 0,
    moves: [],
    name: '',
    stats: [],
    types: [],
    weight: 0,
  }
  textId:string = '';

  ngAfterContentChecked(): void {
    (this.pokemon.id < 10) ? this.textId = `#00${this.pokemon.id}` :
     (this.pokemon.id < 99) ? this.textId = `#0${this.pokemon.id}` : this.textId = `#${this.pokemon.id}`;
  }
}
