import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wishlist-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  markdownFile = 'assets/wishlist/other.md';

  constructor() { }

  ngOnInit() {
  }

}
