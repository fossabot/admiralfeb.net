import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CodeRoutingModule } from './code.routing';
import { MainComponent } from './_main/main.component';
import { CodeComponent } from './code.component';

@NgModule({
  imports: [
    CommonModule,
    CodeRoutingModule,
    MatTooltipModule
  ],
  declarations: [MainComponent, CodeComponent]
})
export class CodeModule { }
