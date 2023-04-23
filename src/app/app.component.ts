import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../pokemon.css']
})
export class AppComponent {
  title = 'angular-pokedex';
  isAliveMenu:boolean = false;
  detailsAlive:boolean = false;

  constructor(private pokemonService: PokemonService){}

  activateMenu():void{
    if(this.isAliveMenu){
      this.isAliveMenu = false;
    } else {
      this.isAliveMenu = true;
    }
  }

  checkDetails():void{
    this.detailsAlive = this.pokemonService.getIsAliveDetails();
  }

  setDetailsAlive(isDetailsAlive:boolean):void{
    this.detailsAlive = isDetailsAlive;
  }
}
