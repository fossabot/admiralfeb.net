import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared-module.module';

import { CodeRoutingModule } from './code.routing';
import { CodeMainComponent } from './components/_main/main.component';
import { CodeComponent } from './code.component';

@NgModule({
  imports: [
    CommonModule,
    CodeRoutingModule,
    SharedModule
  ],
  declarations: [CodeMainComponent, CodeComponent]
})
export class CodeModule { }
