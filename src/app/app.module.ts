import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared-module/shared-module.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        CoreModule,
        SharedModule,
        routing,
        MatTooltipModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
