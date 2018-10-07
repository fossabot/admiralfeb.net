import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ]
})
export class MaterialModule { }
