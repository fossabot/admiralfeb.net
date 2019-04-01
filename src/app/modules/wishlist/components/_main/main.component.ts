import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wishlist-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class WishlistMainComponent implements OnInit {
  updateDate = '2019-04-01';

  constructor() { }

  ngOnInit() {
  }

}
