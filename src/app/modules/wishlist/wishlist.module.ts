import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist.routing';
import { SharedModule } from '../shared-module/shared-module.module';

import { WishlistComponent } from './wishlist.component';
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
    VideoComponent
  ],
})
export class WishlistModule { }
