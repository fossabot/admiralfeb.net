import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@shared/shared-module.module';

import { AppComponent } from './app.component';
import { AppMainComponent } from './components/_main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        SharedModule,
        routing,
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        NavbarComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
