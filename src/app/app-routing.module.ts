import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'header',
    loadChildren: () => import('nv-header').then(m => m.NvHeaderModule),
    outlet: 'header'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
