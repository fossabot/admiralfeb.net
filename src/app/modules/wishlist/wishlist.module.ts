import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist.routing';

import { WishlistComponent } from './wishlist.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { MoneyComponent } from './money/money.component';
import { OtherComponent } from './other/other.component';
import { TechComponent } from './tech/tech.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  imports: [
    CommonModule,
    WishlistRoutingModule,
  ],
  declarations: [
    WishlistComponent,
    MainComponent,
    NavComponent,
    ClothingComponent,
    HomeComponent,
    MoneyComponent,
    OtherComponent,
    TechComponent,
    VideoComponent
  ],
})
export class WishlistModule { }
