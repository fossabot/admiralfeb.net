import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from './modules/shared-module/shared-module.module';
import { AboutModule } from './modules/about/about.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/_main/main.component';
import { NavbarComponent} from './components/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        NavbarComponent,
      ],
      imports: [
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
