import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private r: ActivatedRoute) { }

  ngOnInit() {

  }

  onClick(target: string, location: string) {
    switch (target.toUpperCase()) {
      case 'HOME': {
        $('.wishlist').slideUp();
        $('.code').slideUp();
        break;
      }
      case 'WISHLIST': {
        $('.wishlist').slideDown();
        $('.code').slideUp();
        break;
      }
      case 'CODE': {
        $('.code').slideDown();
        $('.wishlist').slideUp();
        break;
      }
      default:
        break;
    }
  }
}
