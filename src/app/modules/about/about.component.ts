import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  profileURL: string;
  private gravatarURL = 'https://www.gravatar.com/';
  private email = 'Zachary@admiralfeb.net';
  constructor() { }

  ngOnInit() {

  }

}
