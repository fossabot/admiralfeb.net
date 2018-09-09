import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wl-nav',
  templateUrl: './wl-nav.component.html',
  styleUrls: ['./wl-nav.component.css']
})
export class WlNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.navbar').slideDown();
  }

}
