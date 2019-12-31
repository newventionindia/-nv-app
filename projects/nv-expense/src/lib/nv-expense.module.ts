import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './components/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  }
];

@NgModule({
  declarations: [BaseComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [BaseComponent]
})
export class NvExpenseModule { }
