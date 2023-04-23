import { Component, EventEmitter, Output } from '@angular/core';
import { MenuControlService } from 'src/app/services/menu-control.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', './menu.responsive.component.css', '../../../../../pokemon.css']
})
export class MenuComponent {
  @Output() isCardAlive = new EventEmitter<boolean>

  constructor(private menuService: MenuControlService){
  }

  getGeneration(gen:string):void{
    this.menuService.setGeneration(gen);
    this.isCardAlive.emit(true);
  }
}
