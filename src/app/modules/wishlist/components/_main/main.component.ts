import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'wishlist-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  updateDate = '2018-10-30';

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
