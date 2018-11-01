import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WishlistRoutingModule } from './wishlist.routing';
import { SharedModule } from '../shared-module/shared-module.module';

import { WishlistComponent } from './wishlist.component';
import { MainComponent } from './components/_main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { MoneyComponent } from './components/money/money.component';
import { OtherComponent } from './components/other/other.component';
import { TechComponent } from './components/tech/tech.component';
import { VidsComponent } from './components/vids/vids.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WishlistRoutingModule,
    SharedModule
  ],
  declarations: [
    WishlistComponent,
    MainComponent,
    ClothingComponent,
    HomeComponent,
    MoneyComponent,
    OtherComponent,
    TechComponent,
    VidsComponent,
  ],
})
export class WishlistModule { }
