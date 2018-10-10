import { TestBed, async } from '@angular/core/testing';

import { SharedModule } from './modules/shared-module/shared-module.module';
import { CoreModule } from './modules/core/core.module';

import { AppComponent } from './app.component';
import { AboutModule } from './modules/about/about.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        CoreModule,
        SharedModule,
        RouterTestingModule,
        AboutModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
