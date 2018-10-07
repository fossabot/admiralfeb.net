import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared-module/shared-module.module';

import { CoreComponent } from './core.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    CoreComponent,
    NavbarComponent,
  ],
  exports: [
    CoreComponent,
    NavbarComponent,
  ]
})
export class CoreModule { }
