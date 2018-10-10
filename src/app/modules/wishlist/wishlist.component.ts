import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  title = `Admiralfeb's Wishlist`;
  tipNavButton = 'Show/Hide the Navigation Panel';
  constructor(
    private titleService: Title
  ) { }

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
