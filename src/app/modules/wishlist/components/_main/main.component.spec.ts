import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistMainComponent } from './main.component';
import { SharedModule } from '@shared/shared-module.module';

describe('WishlistMainComponent', () => {
  let component: WishlistMainComponent;
  let fixture: ComponentFixture<WishlistMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistMainComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
