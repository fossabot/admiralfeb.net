import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared-module.module';

import { CodeRoutingModule } from './code.routing';
import { MainComponent } from './_main/main.component';
import { CodeComponent } from './code.component';

@NgModule({
  imports: [
    CommonModule,
    CodeRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent, CodeComponent]
})
export class CodeModule { }
