import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSort, MatTableDataSource } from '@angular/material';

import { SharedModule } from '../../shared-module/shared-module.module';
import { ClothingComponent } from './clothing.component';

describe('ClothingComponent', () => {
  let component: ClothingComponent;
  let fixture: ComponentFixture<ClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ClothingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
