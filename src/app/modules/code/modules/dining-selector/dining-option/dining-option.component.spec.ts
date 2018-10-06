import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningOptionComponent } from './dining-option.component';
import { AddOptionComponent } from '../add-option/add-option.component';

describe('DiningOptionComponent', () => {
  let component: DiningOptionComponent;
  let fixture: ComponentFixture<DiningOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
