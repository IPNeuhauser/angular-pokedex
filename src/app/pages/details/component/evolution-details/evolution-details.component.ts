import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonCard } from 'src/app/models/pokemonCard';
import { PokemonEvolution, Pokemons } from 'src/app/models/pokemonEvolution';
import { PokemonSpecie } from 'src/app/models/pokemonSpecie';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-evolution-details',
  templateUrl: './evolution-details.component.html',
  styleUrls: ['./evolution-details.component.css', './evolution-details.responsive.component.css', '../../../../../pokemon.css']
})
export class EvolutionDetailsComponent implements OnInit {
  @Input() pokemonSpecie: PokemonSpecie = {
    egg_groups: [],
    evolution_chain: {url: ''},
    gender_rate: 0,
    is_baby: false,
    is_legendary: false,
    is_mythical: false,
    varieties: []
  }

  @Input() type: string = '';

  @Output() id = new EventEmitter<number>;

  pokemonEvolution: PokemonEvolution = {
    chain:{
      evolves_to: [],
      species: {name: ''},
    }
  }

  pokemon: PokemonCard = {
    id: 0,
    name: '',
    type: '',
    types: [],
  }

  pokemons: Pokemons = {
    inicialForm: [],
    firstEvolution: [],
    secondEvolution: [],
  }

  templateEvos: string = '';

  constructor( private pokemonService: PokemonService){}


  ngOnInit():void{
    this.pokemonService.getEvolutionChain(this.pokemonSpecie.evolution_chain.url).subscribe(
      {
        next: async (res) => {

          this.pokemonEvolution = {
            chain:{
              evolves_to: res.chain.evolves_to,
              species:{
                name: res.chain.species.name
              }
            }
          }
          this.templateEvolution();
          await this.requestPokemonsEvolutions(this.pokemonEvolution);

        },
        error: (error) => console.log(error),
      }
    );
  }

   requestPokemonsEvolutions(pokemon: PokemonEvolution){
    if(pokemon.chain.evolves_to.length > 0){

      this.pokemonService.getPokemon(pokemon.chain.species.name).subscribe(
        {
          next: (res) => {
            this.pokemon = {
              id: res.id,
              name: res.name,
              types: res.types,
              type: res.types[0].type.name
            }
            this.pokemons.inicialForm.push(this.pokemon);
          },
          error: (err) => console.log(err),
        }
      )

      pokemon.chain.evolves_to.forEach((value) => {
        this.pokemonService.getPokemon(value.species.name).subscribe(
          {
            next: (res) => {
              this.pokemon = {
                id: res.id,
                name: res.name,
                types: res.types,
                type: res.types[0].type.name
              }
              this.pokemons.firstEvolution.push(this.pokemon);
            },
            error: (err) => console.log(err),
          }
        )

        if(value.evolves_to.length > 0){

          value.evolves_to.forEach((element) => {
            this.pokemonService.getPokemon(element.species.name).subscribe(
              {
                next: (res) => {
                  this.pokemon = {
                    id: res.id,
                    name: res.name,
                    types: res.types,
                    type: res.types[0].type.name
                  }
                  this.pokemons.secondEvolution.push(this.pokemon);
                },
                error: (err) => console.log(err),
              }
            )
          })
        }
      })
    }
  }

  templateEvolution(){
    this.templateEvos = '';
    if(this.pokemonEvolution.chain.evolves_to.length == 8){
      this.templateEvos = '8';
    }else if (this.pokemonEvolution.chain.evolves_to.length == 3){
      this.templateEvos = '3';
    }else if (this.pokemonEvolution.chain.evolves_to[0].evolves_to.length == 0){
      this.templateEvos = '2';
    } else if (this.pokemonEvolution.chain.evolves_to.length == 0){
      this.templateEvos = '0';
    } else {
      this.templateEvos = '';
    }
  }

  changePokemon(id:number){
    this.id.emit(id);
  }
}
