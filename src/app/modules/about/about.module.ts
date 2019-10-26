import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared-module.module';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routing';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ProfileService } from './profile/profile.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [AboutComponent, ProfileComponent],
  providers: [ProfileService, HttpClientModule]

})
export class AboutModule { }
