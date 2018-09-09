import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UnderConstructionComponent,
    NavbarComponent
  ],
  exports: [
    UnderConstructionComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
