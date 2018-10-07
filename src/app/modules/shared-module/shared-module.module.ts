import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { CountdownComponent } from './countdown/countdown.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    CountdownComponent,
    ErrorNotFoundComponent,
    UnderConstructionComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,

    CountdownComponent,
    ErrorNotFoundComponent,
    UnderConstructionComponent,
  ]
})
export class SharedModule { }
