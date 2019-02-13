import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wishlist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  markdownFile = 'assets/wishlist/home.md';

  constructor() { }

  ngOnInit() {
  }

}
