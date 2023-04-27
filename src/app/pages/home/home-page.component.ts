import { Component} from '@angular/core';
import { PokemonTypes } from 'src/app/models/pokemonTypes';
import { MenuControlService } from 'src/app/services/menu-control.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './home-page.responsive.component.css', '../../../pokemon.css']
})
export class HomePageComponent {
  isCardAlive: boolean = true;
  isTypeAlive = false
  name: string = '';
  limit:number = 12;
  offset: number = 0;
  value: any[] = [];
  pokemonsName: string[] = [];

  constructor(private pokemonService: PokemonService, public menuControl: MenuControlService){
    this.value = Array(this.limit);
  }

  newPokemonList():void{
    let type = this.menuControl.getType();
    let gen = this.menuControl.getGeneration();
    this.value = [];
    this.pokemonsName = [];

    if(type != ''){
      this.getPokemonsType(type);
    } else if (gen != ''){
      this.limit = 12;
      this.offset = this.menuControl.getFirstPokemon();
      this.reload();
      this.isTypeAlive = false;
    } else {
      return;
    }
  }

  reload():void{
    this.value = Array(this.limit);
  }

  getPokemonsType(type:string):void{
    let pokemonTypes: PokemonTypes;
    this.pokemonService.getPokemonType(type).subscribe(
      {
        next: (res) => {
          pokemonTypes = {
            pokemon: res.pokemon
          }
          pokemonTypes.pokemon.forEach((pokemon) => {
            this.pokemonsName.push(pokemon.pokemon.name);
          });
          this.isTypeAlive = true;
        },
        error: (error) => console.log(error)
      }
    );
  }

  getId(id:number | string):void{
    this.pokemonService.setIsAliveDetails(true);
    this.pokemonService.setId(id);
  }

  getName(name:string):void{
    let id = 0;
    this.pokemonService.getPokemon(name).subscribe(
      {
        next: (res) => {
          id = res.id;
          this.pokemonService.setIsAliveDetails(true);
          this.pokemonService.setId(id);
        },
        error: (err) => console.log(err),
      }
    )
  }

  setIsCardAlive(isSearched:boolean): void{
    this.isCardAlive = isSearched
  }

  setIsTypeAlive(isTypeAlive:boolean): void{
    this.isTypeAlive = isTypeAlive
    this.menuControl.setType('');
    this.newPokemonList();
  }

  setPokemonName(name:string): void{
    this.name = name;
  }

  setLimit(limit:number){
    this.limit = limit;
    this.reload();
  }

  setOffset(offset:number){
    this.offset = offset;
  }

}
