import { TestBed, async } from '@angular/core/testing';

import { SharedModule } from '@shared/shared-module.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DiningSelectorComponent } from './dining-selector.component';
import { DiningOptionComponent } from './components/dining-option/dining-option.component';
import { MessagesComponent } from './components/messages/messages.component';

describe('DiningSelectorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule
      ],
      declarations: [
        DiningSelectorComponent,
        DiningOptionComponent,
        MessagesComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DiningSelectorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Dining Selector'`, async(() => {
    const fixture = TestBed.createComponent(DiningSelectorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Dining Selector');
  }));
  it('should render title in a h3 tag', async(() => {
    const fixture = TestBed.createComponent(DiningSelectorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Welcome to Dining Selector!');
  }));
});
