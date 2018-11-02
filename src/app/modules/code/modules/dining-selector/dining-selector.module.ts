import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiningSelectorRoutingModule } from './dining-selector.routing';

import { SharedModule} from '../../../shared-module/shared-module.module';

import { DiningSelectorComponent } from './dining-selector.component';
import { DiningOptionComponent } from './components/dining-option/dining-option.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DiningSelectorRoutingModule
  ],
  declarations: [
    DiningSelectorComponent,
    DiningOptionComponent,
    MessagesComponent
  ]
})
export class DiningSelectorModule { }
