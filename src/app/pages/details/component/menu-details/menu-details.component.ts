import { Component } from '@angular/core';
import { MenuControlService } from 'src/app/services/menu-control.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css', './menu-details.responsive.component.css', '../../../../../pokemon.css']
})
export class MenuDetailsComponent {

  constructor(private menuControlService: MenuControlService){

  }

  getValue(value:string):void{
    this.menuControlService.addMenuOption(value);
  }
}
