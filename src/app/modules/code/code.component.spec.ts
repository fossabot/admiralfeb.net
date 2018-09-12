import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeComponent } from './code.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
