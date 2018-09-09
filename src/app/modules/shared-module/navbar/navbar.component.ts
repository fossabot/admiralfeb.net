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

  onWishlistClick(): void {
    $('.wishlist').slideDown();
    this.router.navigate(['wishlist'], { relativeTo: this.r });
  }

  onNavfromWishlist(target, location: string): void {
    $('.wishlist').slideUp();
    this.router.navigate([location], { relativeTo: this.r });
  }

}
