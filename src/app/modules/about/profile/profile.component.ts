import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Welcome, Entry } from './profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  entries: Welcome;
  profile: Entry;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileJson('Zachary@admiralfeb.net').subscribe((entries: Welcome) => {
      const doo = entries[0];
      alert(doo.id);
    }
    );
  }

}
