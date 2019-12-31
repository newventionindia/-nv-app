import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './components/base/base.component';
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  }
];

@NgModule({
  declarations: [BaseComponent, LinksComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [BaseComponent]
})
export class NvHeaderModule { }
