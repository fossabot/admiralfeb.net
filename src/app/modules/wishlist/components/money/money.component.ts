import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wishlist-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {
  markdownFile = 'assets/wishlist/money.md';

  constructor() { }

  ngOnInit() {
  }

}
