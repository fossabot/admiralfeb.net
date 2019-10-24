import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMainComponent } from './main.component';
import { SharedModule } from '@shared/shared-module.module';

describe('CodeMainComponent', () => {
  let component: CodeMainComponent;
  let fixture: ComponentFixture<CodeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeMainComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
