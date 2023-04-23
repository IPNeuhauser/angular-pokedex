import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageComponent } from './details-page.component';
import { AboutDetailsComponent } from './component/about-details/about-details.component';
import { BaseStatsDetailsComponent } from './component/base-stats-details/base-stats-details.component';
import { MenuDetailsComponent } from './component/menu-details/menu-details.component';
import { MovesDetailsComponent } from './component/moves-details/moves-details.component';
import { DetailsNavComponent } from './component/details-nav/details-nav.component';
import { HeaderDetailsComponent } from './component/header-details/header-details.component';

import { StatsNamePipe } from 'src/app/pipes/stats-name.pipe';
import { AboutDataPipe } from 'src/app/pipes/about-data.pipe';
import { GenderPipe } from 'src/app/pipes/gender.pipe';
import { EvolutionDetailsComponent } from './component/evolution-details/evolution-details.component';

@NgModule({
  declarations: [
    DetailsPageComponent,
    AboutDetailsComponent,
    BaseStatsDetailsComponent,
    MenuDetailsComponent,
    MovesDetailsComponent,
    DetailsNavComponent,
    HeaderDetailsComponent,
    
    StatsNamePipe,
    AboutDataPipe,
    GenderPipe,
    EvolutionDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DetailsPageComponent],
  bootstrap: [DetailsPageComponent]
})
export class DetailsModule { }
