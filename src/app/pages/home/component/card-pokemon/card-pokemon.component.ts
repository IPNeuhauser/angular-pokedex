import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokemonCard } from 'src/app/models/pokemonCard';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css',
              './card-pokemon.responsive.component.css',
              './card-pokemon.animation.component.css',
              '../../../../../pokemon.css',
            ]
})
export class CardPokemonComponent implements OnInit, OnChanges{
  @Input() id_name:string = '1';
  textId:string ='';
  pokemon: PokemonCard= {
    id: 0,
    name: '',
    types: [],
    type:'',
  }

  constructor(private pokemonService: PokemonService){

  }

  ngOnInit():void{

    (this.id_name.length == 1) ? this.textId = '#00' + this.id_name :
      (this.id_name.length == 2) ? this.textId = '#0' + this.id_name : this.textId = '#' + this.id_name;

    this.pokemonService.getPokemon(this.id_name).subscribe(
      {
        next: (resposta) => {
          this.pokemon = {
            name: resposta.name,
            id: resposta.id,
            types: resposta.types,
            type: resposta.types[0].type.name,
          }
        },
        error: (error) => console.log(error)
      }
    );
  }

  ngOnChanges(){
    (this.id_name.length == 1) ? this.textId = '#00' + this.id_name :
      (this.id_name.length == 2) ? this.textId = '#0' + this.id_name : this.textId = '#' + this.id_name;

    this.pokemonService.getPokemon(this.id_name).subscribe(
      {
        next: (resposta) => {
          this.pokemon = {
            name: resposta.name,
            id: resposta.id,
            types: resposta.types,
            type: resposta.types[0].type.name,
          }
        },
        error: (error) => console.log(error)
      }
    );
  }
}
