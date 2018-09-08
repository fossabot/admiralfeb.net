import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared-module.module';

import { CoreComponent } from './core.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [CoreComponent],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
