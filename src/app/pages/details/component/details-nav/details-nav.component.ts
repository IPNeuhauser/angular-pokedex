import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details-nav',
  templateUrl: './details-nav.component.html',
  styleUrls: ['./details-nav.component.css', '../../../../../pokemon.css']
})
export class DetailsNavComponent {
  @Output() animation = new EventEmitter<string>

  constructor(){

  }

  startDisable():void{
    this.animation.emit('disable');
  }
}
