import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from '@shared/components/under-construction/under-construction.component';
import { AppMainComponent } from './components/_main/main.component';
import { ErrorNotFoundComponent } from '@shared/components/error-not-found/error-not-found.component';

const routes: Routes = [
  { path: 'home', component: AppMainComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'underconstruction', component: UnderConstructionComponent },
  { path: 'wishlist', loadChildren: () => import('./modules/wishlist/wishlist.module').then(m => m.WishlistModule) },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
  { path: 'code', loadChildren: () => import('./modules/code/code.module').then(m => m.CodeModule)},
  { path: '**', component: ErrorNotFoundComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
