import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Welcome, Entry } from './profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  entries: Welcome;
  profile: Entry;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileJson('Zachary@admiralfeb.net').subscribe((entries) => {
      const x = entries;
      this.profile = x.entry.shift();
    }
    );
  }

}
