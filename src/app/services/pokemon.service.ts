import { HttpClient } from '@angular/common/http'; // É necessário fazer a importação do HttpClientModule para funcionar
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

import { PokemonCard } from '../models/pokemonCard';
import { PokemonDetail } from '../models/pokemonDetails';
import { Move } from '../models/move';
import { PokemonSpecie } from '../models/pokemonSpecie';
import { PokemonEvolution } from '../models/pokemonEvolution';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokeData: PokemonCard | any;
  private pokeDetails: PokemonDetail | any;
  private move: Move | any;
  private pokemonSpecie: PokemonSpecie | any;
  private pokemonEvolution: PokemonEvolution | any;
  private isAliveDetails:boolean = false;
  private urlAPI:string = '';
  private specieUrl: string = '';
  private id:number = 1;

  constructor(private http:HttpClient) {
    this.urlAPI = environment.pokeApi;
    this.specieUrl = environment.specieUrl;
  }

  setId(id:number):void{
    this.id = id;
  }

  getId():number{
    return this.id;
  }

  setIsAliveDetails(is:boolean):void{
    this.isAliveDetails = is;
  }

  getIsAliveDetails():boolean{
    return this.isAliveDetails;
  }

  getPokemon(nameOrId:string):Observable<PokemonCard>{
    this.pokeData = this.http.get<PokemonCard>(`${this.urlAPI}${nameOrId}`);
    return this.pokeData;
  }

  getPokemonDetails(id:number):Observable<PokemonDetail>{
    this.pokeDetails = this.http.get<PokemonDetail>(`${this.urlAPI}${id}`);
    return this.pokeDetails;
  }

  getMove(url:string):Observable<Move>{
    this.move = this.http.get<Move>(url);
    return this.move;
  }

  getPokemonSpecie(id:string | number):Observable<PokemonSpecie>{
    this.pokemonSpecie = this.http.get<PokemonSpecie>(`${this.specieUrl}${id}`);
    return this.pokemonSpecie;
  }

  getEvolutionChain(url:string): Observable<PokemonEvolution>{
    this.pokemonEvolution = this.http.get<PokemonEvolution>(url);
    return this.pokemonEvolution;
  }
}
