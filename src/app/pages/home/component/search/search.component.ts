import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', './search.responsive.component.css', '../../../../../pokemon.css']
})
export class SearchComponent {
  isAliveSearch:boolean = false;
  @Output() isSearched = new EventEmitter<boolean>;
  @Output() name = new EventEmitter<string>;
  pokemonName: string = '';


  constructor(){}

  createSearch():void{
    if(this.isAliveSearch){
      if(this.pokemonName == ''){
        this.isAliveSearch = false;
      } else {
        this.search();
      }
    } else {
      this.isAliveSearch = true;
    }
  }

  search():void{
    this.isSearched.emit(false);
    this.name.emit(this.pokemonName.toLowerCase());
    this.pokemonName = '';
  }
}
