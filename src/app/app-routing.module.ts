import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'header',
    loadChildren: () => import('nv-header').then(m => m.NvHeaderModule),
    outlet: 'header'
  },
  { path: 'expense',
    loadChildren: () => import('nv-expense').then(m => m.NvExpenseModule),
    outlet: 'dynamicModules'
  },
  { path: 'invoice',
    loadChildren: () => import('nv-invoice').then(m => m.NvInvoiceModule),
    outlet: 'dynamicModules'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
