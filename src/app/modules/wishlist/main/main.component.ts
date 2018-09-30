import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-wishlist-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let frmPromise = this.onOneNoteLoad();
    frmPromise.then(() => {
      $('#oneNoteLoader').slideToggle();
      $('#frmOneNote').slideToggle();
    });
  }

  onOneNoteLoad() {
    return new Promise(function (resolve, reject) {
      (function waitforiFrame() {
        $('#frmOneNote').on('load', function () {
          resolve();
        });
      })();
    });
  }
}
