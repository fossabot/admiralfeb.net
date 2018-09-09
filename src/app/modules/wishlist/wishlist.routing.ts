import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WishlistModule } from './wishlist.module';
import { WishlistComponent } from './wishlist.component';
import { ClothingComponent } from './clothing/clothing.component';
import { VideoComponent } from './video/video.component';
import { TechComponent } from './tech/tech.component';
import { OtherComponent } from './other/other.component';
import { MoneyComponent } from './money/money.component';
import { HomeComponent } from './home/home.component';

const wishlistRoutes: Routes = [
  {
    path: '.', component: WishlistComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'home', component: HomeComponent },
      { path: 'clothing', component: ClothingComponent },
      { path: 'money', component: MoneyComponent },
      { path: 'other', component: OtherComponent },
      { path: 'tech', component: TechComponent },
      { path: 'video', component: VideoComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '.', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(wishlistRoutes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
