import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  title = `Admiralfeb's Wishlist`;
  tipNavButton = 'Show/Hide the Navigation Panel';
  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.initHamburger();
  }

  initHamburger() {
    const mgn = $('#sidebar').attr('margin');
  }
  hamburger() {
    $('#sidebar').toggleClass('active');
  }
}
