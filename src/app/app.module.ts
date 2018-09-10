import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { SharedModule } from './modules/shared-module/shared-module.module';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
