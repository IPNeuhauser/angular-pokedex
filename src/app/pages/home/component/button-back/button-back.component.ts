import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.css', '../../../../../pokemon.css']
})
export class ButtonBackComponent {
  @Output() isCardAlive = new EventEmitter<boolean>
  @Output() isTypeAlive = new EventEmitter<boolean>

  killCard(){
    this.isCardAlive.emit(true);
  }

  killTypes(){
    this.isTypeAlive.emit(false);
  }
}
