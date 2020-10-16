import { NgModule } from '@angular/core';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesComponent } from './animes.component';
import { MaterialModule } from '../material/material.module';
import { GlobalModule } from '../global/global.module';


@NgModule({
  declarations: [AnimesComponent],
  imports: [
    AnimesRoutingModule,
    MaterialModule,
    GlobalModule
  ]
})
export class AnimesModule { }
