import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MosaicComponent } from './mosaic/mosaic.component';

const routes: Routes = [{
  path: '**',
  component: MosaicComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MosaicRoutingModule { }
