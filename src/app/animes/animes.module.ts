import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesComponent } from './animes.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [AnimesComponent],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    MaterialModule
  ]
})
export class AnimesModule { }
