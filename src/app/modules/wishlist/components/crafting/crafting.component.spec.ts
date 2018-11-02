import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/modules/shared-module/shared-module.module';
import { CraftingComponent } from './crafting.component';

describe('CraftingComponent', () => {
  let component: CraftingComponent;
  let fixture: ComponentFixture<CraftingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ CraftingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
