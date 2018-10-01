import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared-module.module';
import { RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WlNavComponent } from './navbar/wishlist-nav/wl-nav.component';
import { CodeNavComponent } from './navbar/code-nav/code-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    CoreComponent,
    NavbarComponent,
    CodeNavComponent,
    WlNavComponent,
  ],
  exports: [
    CoreComponent,
    NavbarComponent,
    CodeNavComponent,
    WlNavComponent,
  ]
})
export class CoreModule { }
