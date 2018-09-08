import { TestBed, async } from '@angular/core/testing';

import { SharedModule } from './modules/shared-module/shared-module.module';
import { CoreModule } from './modules/core/core.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AboutComponent,
      ],
      imports: [
        CoreModule,
        SharedModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Admiralfeb\'s Website'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Admiralfeb\'s Website');
  }));

});
