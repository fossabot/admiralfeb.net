import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WlNavComponent } from './wl-nav.component';

describe('WlNavComponent', () => {
  let component: WlNavComponent;
  let fixture: ComponentFixture<WlNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WlNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
