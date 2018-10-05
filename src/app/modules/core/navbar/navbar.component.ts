import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router, UrlSegment, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private r: ActivatedRoute) {
    router.events.forEach((event) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        const location = event.urlAfterRedirects;
        if (location.toUpperCase().includes('CODE')) {
          this.onClick('code');
        } else {
          this.onClick('home');
        }
      }
    });
  }

  ngOnInit() {

  }

  onClick(target: string) {
    switch (target.toUpperCase()) {
      case 'HOME': {
        $('#wishlist').slideUp();
        $('#code').slideUp();
        break;
      }
      case 'CODE': {
        $('#code').slideDown();
        $('#wishlist').slideUp();
        break;
      }
      default:
        break;
    }
  }
}
