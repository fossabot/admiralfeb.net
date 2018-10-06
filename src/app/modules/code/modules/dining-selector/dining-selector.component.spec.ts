import { TestBed, async } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DiningSelectorComponent } from './dining-selector.component';
import { DiningOptionComponent } from './dining-option/dining-option.component';
import { MessagesComponent } from './messages/messages.component';
import { AddOptionComponent } from './add-option/add-option.component';

describe('DiningSelectorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatExpansionModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      declarations: [
        DiningSelectorComponent,
        DiningOptionComponent,
        MessagesComponent,
        AddOptionComponent
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
