import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistMainComponent } from './components/_main/main.component';
import { WishlistComponent } from './wishlist.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { CraftingComponent } from './components/crafting/crafting.component';
import { AVComponent } from './components/av/av.component';
import { TechComponent } from './components/tech/tech.component';
import { HomeComponent } from './components/home/home.component';
import { MoneyComponent } from './components/money/money.component';
import { OtherComponent } from './components/other/other.component';
import { ErrorNotFoundComponent } from '../shared-module/components/error-not-found/error-not-found.component';

const wishlistRoutes: Routes = [
  {
    path: '_', component: WishlistComponent,
    children: [
      { path: 'main', component: WishlistMainComponent },
      { path: 'av', component: AVComponent },
      { path: 'clothing', component: ClothingComponent },
      { path: 'crafting', component: CraftingComponent },
      { path: 'home', component: HomeComponent },
      { path: 'money', component: MoneyComponent },
      { path: 'other', component: OtherComponent },
      { path: 'tech', component: TechComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: '**', component: ErrorNotFoundComponent},
    ]
  },
  { path: '', redirectTo: '_', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(wishlistRoutes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
