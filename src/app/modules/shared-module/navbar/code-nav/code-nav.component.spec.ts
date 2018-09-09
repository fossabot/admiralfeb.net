import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeNavComponent } from './code-nav.component';

describe('CodeNavComponent', () => {
  let component: CodeNavComponent;
  let fixture: ComponentFixture<CodeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
