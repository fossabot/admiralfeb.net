import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiningSelectorRoutingModule } from './dining-selector.routing';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DiningSelectorComponent } from './dining-selector.component';
import { DiningOptionComponent } from './dining-option/dining-option.component';
import { AddOptionComponent } from './add-option/add-option.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    DiningSelectorRoutingModule
  ],
  declarations: [
    DiningSelectorComponent,
    DiningOptionComponent,
    AddOptionComponent,
    MessagesComponent
  ]
})
export class DiningSelectorModule { }
