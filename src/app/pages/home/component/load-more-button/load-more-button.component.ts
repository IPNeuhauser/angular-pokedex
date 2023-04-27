import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css', '../../../../../pokemon.css']
})
export class LoadMoreButtonComponent implements OnChanges{
  @Output() sendLimit = new EventEmitter<number>;
  @Output() sendOffset = new EventEmitter<number>;
  @Input() firstPokemon:string = '';
  @Input() lastPokemon:string = '';

  offset:number = 0;
  limit: number = 0;
  pag:number = 12;

  constructor(){
  }

  ngOnChanges():void{
    this.offset = +this.firstPokemon;
    this.limit = +this.firstPokemon + +this.lastPokemon;
  }

  nextPage():void{
    let rest = Math.round(+this.limit % 12);

    if(this.offset + rest == +this.limit || this.offset >= +this.limit){
      this.pag = 12;
      this.offset = +this.firstPokemon;
    }else if(this.offset + 12 > +this.limit - 12){
      if(rest == 0){
        this.pag = 12;
        this.offset = +this.firstPokemon
      } else {
        this.pag = rest;
        this.offset = +this.limit - rest;
      }
    }else {
      this.offset += 12;
      this.pag = 12;

      this.sendLimit.emit(this.pag);
      this.sendOffset.emit(this.offset);
    }

  }

  previousPage():void{
    let rest = Math.round(+this.limit % 12);

    if(this.offset - rest == +this.limit){
      this.pag = 12;
      this.offset = +this.limit - 12;
    }else if(this.offset - 12 < +this.firstPokemon){
      if(rest == 0){
        this.pag = 12;
        this.offset = +this.limit -12;
      } else {
        this.pag = rest;
        this.offset = +this.limit - rest;
      }
    } else {
      this.offset -= 12;
      this.pag = 12;
    }

    this.sendLimit.emit(this.pag);
    this.sendOffset.emit(this.offset);
  }
}
