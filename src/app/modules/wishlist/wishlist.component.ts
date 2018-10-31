import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  title = `Admiralfeb's Wishlist`;
  tipNavButton = 'Show/Hide the Navigation Panel';
  innerWidth: number;
  bNavActive = false;

  constructor(
    private titleService: Title
  ) { }

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
