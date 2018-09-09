import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from './modules/shared-module/under-construction/under-construction.component';
import { CoreComponent } from './modules/core/core.component';

const routes: Routes = [
  { path: 'home', component: CoreComponent},
  { path: 'underconstruction', component: UnderConstructionComponent },
  { path: 'wishlist', loadChildren: './modules/wishlist/wishlist.module#WishlistModule'},
  { path: 'code', loadChildren: './modules/code/code.module#CodeModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
