import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  tipNavButton = 'Show/Hide the Navigation Panel';
  title = `Admiralfeb's Code`;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  hamburger() {
    $('#sidebar').toggleClass('active');
  }

  navClick() {
    const width = <number>$(window).width();
    if (width < 768) {
      $('#sidebar').toggleClass('active');
    }
  }
}
