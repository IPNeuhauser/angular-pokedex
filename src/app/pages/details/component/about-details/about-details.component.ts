import { Component, Input } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemonDetails';
import { PokemonSpecie } from 'src/app/models/pokemonSpecie';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css', './about-details.responsive.component.css', '../../../../../pokemon.css']
})
export class AboutDetailsComponent{
  @Input() pokemon: PokemonDetail = {
    name: '',
    id: 0,
    types: [],
    abilities:[{ability:{name:'teste'}}],
    height:0,
    weight:0,
    moves:[],
    stats: [],
  }

  @Input() pokemonSpecie: PokemonSpecie = {
    egg_groups: [],
    evolution_chain: {
      url: '',
    },
    gender_rate: 4,
    is_baby: false,
    is_legendary: false,
    is_mythical: false,
    varieties: [],
  }

}
