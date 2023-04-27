import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuControlService {
  private menuOption: string = '';
  private generation: string = '';
  private lastPokemon: number = 1008;
  private firstPokemon: number = 0;
  private type: string ='';

  constructor() { }

  setGeneration(gen:string):void{
    if(gen == ''){
      return;
    };

    this.type = '';
    this.generation = gen;

    switch(this.generation){
      case 'first': {
        this.lastPokemon = 151;
        this.firstPokemon = 0;
        break;
      }
      case 'second': {
        this.lastPokemon = 100;
        this.firstPokemon = 151;
        break
      }
      case 'third': {
        this.lastPokemon = 135;
        this.firstPokemon = 251;
        break
      }
      case 'fourth': {
        this.lastPokemon = 107;
        this.firstPokemon = 386;
        break
      }
      case 'fifth': {
        this.lastPokemon = 155;
        this.firstPokemon = 494;
        break
      }
      case 'sixth': {
        this.lastPokemon = 72;
        this.firstPokemon = 649;
        break
      }
      case 'seventh': {
        this.lastPokemon = 88;
        this.firstPokemon = 721;
        break
      }
      case 'eighth': {
        this.lastPokemon = 96;
        this.firstPokemon = 809;
        break
      }
      case 'nineth': {
        this.lastPokemon = 103;
        this.firstPokemon = 905;
        break
      }
    };
  }

  getLastPokemon():number{
    return this.lastPokemon;
  }

  getFirstPokemon():number{
    return this.firstPokemon;
  }

  addMenuOption(menuOption:string):void{
    this.menuOption = menuOption;
  }

  getMenuOption():string{
    return this.menuOption;
  }

  setType(type:string):void{
    if(type == ''){
      return;
    }

    this.generation = '';
    this.type = type;
  }

  getType():string{
    return this.type;
  }

  getGeneration():string{
    return this.generation;
  }
}
