import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FormsModule } from '@angular/forms';
import { LocalTimeComponent } from './local-time/local-time.component';

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
    LocalTimeComponent
  ],
  exports: [
    UnderConstructionComponent,
    CountdownComponent,
    LocalTimeComponent
  ]
})
export class SharedModule { }
