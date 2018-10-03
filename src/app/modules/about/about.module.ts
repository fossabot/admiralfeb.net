import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule
  ],
  declarations: [AboutComponent, ProfileComponent],

})
export class AboutModule { }
