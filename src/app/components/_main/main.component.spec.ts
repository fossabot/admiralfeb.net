import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainComponent } from './main.component';
import { SharedModule } from '@shared/shared-module.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppMainComponent', () => {
  let component: AppMainComponent;
  let fixture: ComponentFixture<AppMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppMainComponent],
      imports: [SharedModule, NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Admiralfeb's Website'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(`Admiralfeb's Website`);
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Admiralfeb\'s Website!');
  });
});
