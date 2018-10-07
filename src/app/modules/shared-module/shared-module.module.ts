import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    UnderConstructionComponent,
    ErrorNotFoundComponent,
    CountdownComponent,
  ],
  exports: [
    UnderConstructionComponent,
    CountdownComponent,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
