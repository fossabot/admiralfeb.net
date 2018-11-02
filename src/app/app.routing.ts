import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from './modules/shared-module/components/under-construction/under-construction.component';
import { AppMainComponent } from './components/_main/main.component';
import { ErrorNotFoundComponent } from './modules/shared-module/components/error-not-found/error-not-found.component';

const routes: Routes = [
  { path: 'home', component: AppMainComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'underconstruction', component: UnderConstructionComponent },
  { path: 'wishlist', loadChildren: './modules/wishlist/wishlist.module#WishlistModule' },
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
  { path: 'code', loadChildren: './modules/code/code.module#CodeModule'},
  { path: '**', component: ErrorNotFoundComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
