import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared-module.module';

import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CoreComponent],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
