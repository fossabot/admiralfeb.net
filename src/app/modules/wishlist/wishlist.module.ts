import { NgModule } from '@angular/core';

import { WishlistComponent } from './wishlist.component';

import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared-module.module';

export const wishlistroutes: Routes = [
  { path: '', component: WishlistComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(wishlistroutes),
    SharedModule
  ],
  declarations: [WishlistComponent]
})
export class WishlistModule { }
