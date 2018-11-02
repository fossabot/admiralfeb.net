import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wishlist-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class WishlistMainComponent implements OnInit {
  updateDate = '2018-10-30';

  constructor() { }

  ngOnInit() {
  }

}
