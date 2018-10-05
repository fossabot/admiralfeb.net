import { BrowserModule } from '@angular/platform-browser';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared-module/shared-module.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        CoreModule,
        SharedModule,
        routing,
        BrowserAnimationsModule,
        MatTooltipModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
