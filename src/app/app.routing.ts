import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from './modules/shared-module/under-construction/under-construction.component';
import { CoreComponent } from './modules/core/core.component';
import { ErrorNotFoundComponent } from './modules/shared-module/error-not-found/error-not-found.component';

const routes: Routes = [
  { path: 'home', component: CoreComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'underconstruction', component: UnderConstructionComponent },
  { path: 'wishlist', loadChildren: './modules/wishlist/wishlist.module#WishlistModule' },
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
  { path: 'code', loadChildren: './modules/code/code.module#CodeModule'},
  { path: '**', component: ErrorNotFoundComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
