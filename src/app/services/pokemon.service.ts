import { HttpClient } from '@angular/common/http'; // É necessário fazer a importação do HttpClientModule para funcionar
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

import { PokemonCard } from '../models/pokemonCard';
import { PokemonDetail } from '../models/pokemonDetails';
import { Move } from '../models/move';
import { PokemonSpecie } from '../models/pokemonSpecie';
import { PokemonEvolution } from '../models/pokemonEvolution';
import { PokemonTypes } from '../models/pokemonTypes';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private isAliveDetails:boolean = false;
  private urlAPI:string = '';
  private specieUrl: string = '';
  private id:number | string = 1;

  constructor(private http:HttpClient) {
    this.urlAPI = environment.pokeApi;
    this.specieUrl = environment.specieUrl;
  }

  setId(id:number | string):void{
    this.id = id;
  }

  getId():number | string{
    return this.id;
  }

  setIsAliveDetails(is:boolean):void{
    this.isAliveDetails = is;
  }

  getIsAliveDetails():boolean{
    return this.isAliveDetails;
  }

  getPokemon(nameOrId:string):Observable<PokemonCard>{
    let pokeData: PokemonCard | any;
    pokeData = this.http.get<PokemonCard>(`${this.urlAPI}${nameOrId}`);
    return pokeData;
  }

  getPokemonDetails(id:number | string):Observable<PokemonDetail>{
    let pokeDetails: PokemonDetail | any;
    pokeDetails = this.http.get<PokemonDetail>(`${this.urlAPI}${id}`);
    return pokeDetails;
  }

  getMove(url:string):Observable<Move>{
    let move: Move | any;
    move = this.http.get<Move>(url);
    return move;
  }

  getPokemonSpecie(id:string | number):Observable<PokemonSpecie>{
    let pokemonSpecie: PokemonSpecie | any;
    pokemonSpecie = this.http.get<PokemonSpecie>(`${this.specieUrl}${id}`);
    return pokemonSpecie;
  }

  getEvolutionChain(url:string): Observable<PokemonEvolution>{
    let pokemonEvolution: PokemonEvolution | any;
    pokemonEvolution = this.http.get<PokemonEvolution>(url);
    return pokemonEvolution;
  }

  getPokemonType(type:string):Observable<any>{
    let pokemonType: PokemonTypes | any;
    pokemonType = this.http.get<PokemonTypes>(`${environment.typeUrl}${type}`);
    return pokemonType;
  }
}
