import { Component } from '@angular/core';
import { MenuControlService } from 'src/app/services/menu-control.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './home-page.responsive.component.css', '../../../pokemon.css']
})
export class HomePageComponent {
  isMenuAlive:boolean = false;
  isCardAlive: boolean = true;
  name: string = '';
  limit:number = 12;
  offset: number = 0;
  value: number[] = [];

  constructor(private pokemonService: PokemonService, public menuControl: MenuControlService){
    this.value = Array(this.limit);
  }

  changeAliveMenu():void{
    (this.isMenuAlive) ? this.isMenuAlive = false : this.isMenuAlive = true;
  }

  newPokemonList():void{
    this.value = []
    this.offset = this.menuControl.getFirstPokemon();
    this.limit = 12;
    this.reload();
  }

  reload():void{
    this.value = Array(this.limit);
  }

  getId(id:number):void{
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
