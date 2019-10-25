import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { Convert, Welcome, Entry } from './profile';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  // let entries: Welcome;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ProfileService', ['getProfileJson', 'subscribe']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ProfileComponent ],
      providers: [ ProfileService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

    // entries = Convert.toWelcome('./defaultProfile.json');


    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
