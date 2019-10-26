import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared-module.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DiningOptionComponent } from './dining-option.component';

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
