import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/_main/main.component';
import { WishlistComponent } from './wishlist.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { VidsComponent } from './components/vids/vids.component';
import { TechComponent } from './components/tech/tech.component';
import { HomeComponent } from './components/home/home.component';
import { MoneyComponent } from './components/money/money.component';
import { OtherComponent } from './components/other/other.component';

const wishlistRoutes: Routes = [
  {
    path: '_', component: WishlistComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'home', component: HomeComponent },
      { path: 'clothing', component: ClothingComponent },
      { path: 'money', component: MoneyComponent },
      { path: 'other', component: OtherComponent },
      { path: 'tech', component: TechComponent },
      { path: 'video', component: VidsComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '_', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(wishlistRoutes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
