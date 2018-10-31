import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  tipNavButton = 'Show/Hide the Navigation Panel';
  title = `Admiralfeb's Code`;
  innerWidth: number;
  bNavActive = false;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.innerWidth = window.innerWidth;
    if (<number>this.innerWidth > 768) {
      this.bNavActive = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (<number>this.innerWidth > 768) {
      this.bNavActive = true;
    } else {
      this.bNavActive = false;
    }
  }

  hamburger() {
    this.bNavActive = this.bNavActive ? false : true;
  }

  navClick() {
    this.innerWidth = window.innerWidth;
    if (<number>this.innerWidth < 768) {
      this.bNavActive = false;
    }
  }
}
