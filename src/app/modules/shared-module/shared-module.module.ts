import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    UnderConstructionComponent,
    ErrorNotFoundComponent,
    CountdownComponent,
    LoaderComponent
  ],
  exports: [
    UnderConstructionComponent,
    CountdownComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
