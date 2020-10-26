import { NgModule } from '@angular/core';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesComponent } from './animes.component';
import { MaterialModule } from '../material/material.module';
import { GlobalModule } from '../global/global.module';
import { AnimesFilterComponent } from './animes-filter/animes-filter.component';
import { AnimesCardComponent } from './animes-card/animes-card.component';


@NgModule({
  declarations: [AnimesComponent, AnimesFilterComponent, AnimesCardComponent],
  imports: [
    AnimesRoutingModule,
    MaterialModule,
    GlobalModule
  ]
})
export class AnimesModule { }
