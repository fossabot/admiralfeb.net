import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WishlistRoutingModule } from './wishlist.routing';
import { SharedModule } from '../shared-module/shared-module.module';

import { WishlistComponent } from './wishlist.component';
import { WishlistMainComponent } from './components/_main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { MoneyComponent } from './components/money/money.component';
import { OtherComponent } from './components/other/other.component';
import { TechComponent } from './components/tech/tech.component';
import { VidsComponent } from './components/vids/vids.component';
import { CraftingComponent } from './components/crafting/crafting.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WishlistRoutingModule,
    SharedModule
  ],
  declarations: [
    WishlistComponent,
    WishlistMainComponent,
    ClothingComponent,
    HomeComponent,
    MoneyComponent,
    OtherComponent,
    TechComponent,
    VidsComponent,
    CraftingComponent,
  ],
})
export class WishlistModule { }
