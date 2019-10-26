import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { WishlistRoutingModule } from './wishlist.routing';
import { SharedModule } from '@shared/shared-module.module';

import { WishlistComponent } from './wishlist.component';
import { WishlistMainComponent } from './components/_main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { MoneyComponent } from './components/money/money.component';
import { OtherComponent } from './components/other/other.component';
import { TechComponent } from './components/tech/tech.component';
import { AVComponent } from './components/av/av.component';
import { CraftingComponent } from './components/crafting/crafting.component';
import { markedOptionsFactory } from './markedOptionsFactory';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    WishlistRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  declarations: [
    WishlistComponent,
    WishlistMainComponent,
    ClothingComponent,
    HomeComponent,
    MoneyComponent,
    OtherComponent,
    TechComponent,
    AVComponent,
    CraftingComponent,
  ],
})
export class WishlistModule { }
