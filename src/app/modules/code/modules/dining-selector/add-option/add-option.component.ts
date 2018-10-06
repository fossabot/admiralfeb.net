import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.css']
})
export class AddOptionComponent implements OnInit {
  @Output() received = new EventEmitter<string>();
  nothingEntered = 'Nothing was entered. You don\'t want to eat?';
  option = '';
  constructor() { }

  ngOnInit() {
    $('.newOption').hide();
    this.attachEvents();
  }

  attachEvents() {
    $('#btnToggle').click(this.toggleSection);
    $('#btnnewOption').click(this.onSubmit.bind(this));
    $('#txtnewOption').keyup(function (e) {
      if (e.key === 'Enter') {
        this.onSubmit().bind(this);
      }
    }.bind(this));
  }


  toggleSection(): void {
    $('.newOption').slideToggle();
  }

  add(input: string): void {
    if (input) {
      this.received.emit(input);
      $('.wrongInput').slideUp();
    } else {
      $('.wrongInput').slideDown();
      let i = 0;
      const inv = setInterval(() => {
        $('#txtnewOption').toggleClass('alertUser');
        i++;
        if (i > 7) {
          clearInterval(inv);
          $('#txtnewOption').removeClass('alertUser');
        }
      }, 200);
    }
  }


  onSubmit() {
    // tslint:disable-next-line:prefer-const
    let txtElement = $('#txtnewOption');
    // tslint:disable-next-line:prefer-const
    let value = $(txtElement).val();
    $(txtElement).val('');
    this.add(value);
  }
}
