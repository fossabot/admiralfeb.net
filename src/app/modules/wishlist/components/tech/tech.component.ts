import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wishlist-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  markdownFile = 'assets/wishlist/tech.md';
  constructor() { }

  ngOnInit() {
  }

}
