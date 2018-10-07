import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../../../shared-module/shared-module.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AddOptionComponent } from './add-option.component';

describe('AddOptionComponent', () => {
  let component: AddOptionComponent;
  let fixture: ComponentFixture<AddOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule
      ],
      declarations: [ AddOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
