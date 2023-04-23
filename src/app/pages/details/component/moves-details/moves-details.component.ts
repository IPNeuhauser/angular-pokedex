import { Component, Input, OnChanges } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetail } from 'src/app/models/pokemonDetails';
import { Move } from 'src/app/models/move';

@Component({
  selector: 'app-moves-details',
  templateUrl: './moves-details.component.html',
  styleUrls: ['./moves-details.component.css', '../../../../../pokemon.css', './moves-details.responsive.component.css']
})
export class MovesDetailsComponent implements OnChanges{
  @Input() pokemon: PokemonDetail = {
    name: '',
    id: 0,
    types: [],
    abilities:[],
    height:0,
    weight:0,
    moves:[{move: {name: '', url: ''}}],
    stats: [],
  };

  moves:Move[] = [];
  limit:number = 4;
  offset:number = 0;
  move: Move ={
    name: '',
    id: 0,
    type:{name: ''},
  }

  constructor(private pokemonService: PokemonService){}

  ngOnChanges():void{
    this.getMoves();
  }

  previousMoves(){
    if(this.limit - 4 <= 0){
      this.limit = this.pokemon.moves.length;
      this.offset = this.pokemon.moves.length - (this.pokemon.moves.length % 4);
    } else{
      this.limit = this.offset;
      this.offset -= 4;
    }
    this.getMoves();

  }

  nextMoves(){
    if(this.limit == this.pokemon.moves.length){
      this.limit = 4;
      this.offset = 0;
    } else if(this.limit + 4 > this.pokemon.moves.length){
      this.limit = this.pokemon.moves.length;
      this.offset = this.pokemon.moves.length - (this.pokemon.moves.length % 4);
    } else{
      this.limit += 4;
      this.offset += 4;
    }
    this.getMoves();
  }

  getMoves():void{
    this.moves = [];
    this.pokemon.moves.forEach((value, index) => {
      if (index >= this.offset && index < this.limit) {
        this.pokemonService.getMove(value.move.url).subscribe(
          {
            next: (res) => {
              this.move = {
                name: res.name,
                id: res.id,
                type: res.type,
              };
              this.moves.push(this.move);
            },
            error: (error) => console.log(error),
          }
        );
      }
    })
  }

  getMoveType():string{
    return this.move.type.name;
  }
}
