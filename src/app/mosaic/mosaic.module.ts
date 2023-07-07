import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MosaicRoutingModule } from './mosaic-routing.module';
import { MosaicComponent } from './mosaic/mosaic.component';


@NgModule({
  declarations: [
    MosaicComponent
  ],
  imports: [
    CommonModule,
    MosaicRoutingModule
  ]
})
export class MosaicModule { }
