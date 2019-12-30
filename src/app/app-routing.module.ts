import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProxyLoadChildrenComponent } from './components/proxy-load-children/proxy-load-children.component';

const routes: Routes = [
  { path: '',
    // component: ProxyLoadChildrenComponent,
    loadChildren: () => import('nv-header').then(m => m.NvHeaderModule),
    // outlet: 'header'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
