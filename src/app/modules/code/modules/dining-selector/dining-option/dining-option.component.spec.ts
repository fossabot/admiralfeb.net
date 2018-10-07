import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../../../shared-module/shared-module.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DiningOptionComponent } from './dining-option.component';
import { AddOptionComponent } from '../add-option/add-option.component';

describe('DiningOptionComponent', () => {
  let component: DiningOptionComponent;
  let fixture: ComponentFixture<DiningOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule
      ],
      declarations: [
        DiningOptionComponent,
        AddOptionComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
