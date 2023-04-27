import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environment/environment';

import { MenuControlService } from 'src/app/services/menu-control.service';
import { PokemonService } from 'src/app/services/pokemon.service';

import { PokemonDetail } from 'src/app/models/pokemonDetails';
import { PokemonSpecie } from 'src/app/models/pokemonSpecie';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css',
              './details-page.responsive.component.css',
              './details-page.animation.component.css',
              '../../../pokemon.css',
            ]
})
export class DetailsPageComponent implements OnInit{
  id: number | string = 0;
  menuOption: string = 'About';
  type:string = '';
  url:string = '';
  animation: string = '';
  @Output() isDetailsAlive = new EventEmitter<boolean>;

  pokemon: PokemonDetail = {
    name: '',
    id: 0,
    types: [],
    abilities:[],
    height: 0,
    weight: 0,
    moves:[],
    stats: [],
  }

  pokemonSpecie: PokemonSpecie = {
    egg_groups: [],
    evolution_chain: {url: ''},
    gender_rate: 0,
    is_baby: false,
    is_legendary: false,
    is_mythical: false,
    varieties: []
  }

  constructor(
    private menuControlService: MenuControlService,
    private pokemonService: PokemonService,
  ){
    this.id = pokemonService.getId();
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonDetails(this.id).subscribe(
      {next: (res) => {
          this.pokemon = {
            name: res.name,
            id: res.id,
            types: res.types,
            abilities: res.abilities,
            height: res.height,
            weight: res.weight,
            moves: res.moves,
            stats: res.stats,
          }
          this.url = `${environment.imgUrl}${this.pokemon.id}.png`
          this.type = this.pokemon.types[0].type.name;
        },
        error: (error) => console.log(error),
      }
    );

    this.pokemonService.getPokemonSpecie(this.id).subscribe(
      {
        next: (res) => {
          this.pokemonSpecie = {
            egg_groups: res.egg_groups,
            evolution_chain: res.evolution_chain,
            gender_rate: res.gender_rate,
            is_baby: res.is_baby,
            is_legendary: res.is_legendary,
            is_mythical: res.is_mythical,
            varieties: res.varieties
          };
        },
        error: (error) => console.log(error)
      }
    )
    this.animation = 'scale-center';
  }

  changeMenu(): void {
    this.menuOption = this.menuControlService.getMenuOption();
  }

  changeIsAliveDetails():void{
    this.pokemonService.setIsAliveDetails(false);
    this.isDetailsAlive.emit(false);
  }

  startDisable(text:string):void{
    this.animation = text;

    //Async to create a delay
    (async () => {
      await this.delay(200);
      this.changeIsAliveDetails();
    })();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  reloadPage(id:number){
    this.pokemonService.getPokemonDetails(id).subscribe(
      {
        next: (res) => {
          this.animation = 'flip';
          (async () => {
            await this.delay(400);
            this.pokemon = {
              abilities: res.abilities,
              height: res.height,
              id: res.id,
              moves: res.moves,
              name: res.name,
              stats: res.stats,
              types: res.types,
              weight: res.weight
            }
            this.url = `${environment.imgUrl}${this.pokemon.id}.png`
            this.type = this.pokemon.types[0].type.name;
            (async () => {
              await this.delay(400);
              this.animation = '';
            })();
          })();
        },
        error: (error) => console.log(error),
      }
    )
  }
}
