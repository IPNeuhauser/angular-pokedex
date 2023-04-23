import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Necessário importar para fazer requisições HTTP
import { FormsModule } from '@angular/forms'; // Necessário para trabalhar com formulários

import { HomePageComponent } from './home-page.component';
import { CardPokemonComponent } from './component/card-pokemon/card-pokemon.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { SearchComponent } from './component/search/search.component';
import { TitleComponent } from './component/title/title.component';
import { LoadMoreButtonComponent } from './component/load-more-button/load-more-button.component';
import { ButtonBackComponent } from './component/button-back/button-back.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CardPokemonComponent,
    FooterComponent,
    MenuComponent,
    SearchComponent,
    TitleComponent,
    LoadMoreButtonComponent,
    ButtonBackComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [HomePageComponent],
  providers:[],
})
export class HomeModule { }
