import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NvHeaderComponent } from './nv-header.component';

const routes: Routes = [
  {
    path: '',
    component: NvHeaderComponent
  }
];

@NgModule({
  declarations: [NvHeaderComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [NvHeaderComponent]
})
export class NvHeaderModule { }
