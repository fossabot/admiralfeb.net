import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code.routing';
import { MainComponent } from './main/main.component';
import { CodeComponent } from './code.component';

@NgModule({
  imports: [
    CommonModule,
    CodeRoutingModule
  ],
  declarations: [MainComponent, CodeComponent]
})
export class CodeModule { }
