import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profileURL: string;
  private gravatarURL = 'https://www.gravatar.com/';
  private email = 'Zachary@admiralfeb.net';
  constructor() { }

  ngOnInit() {

  }

}
