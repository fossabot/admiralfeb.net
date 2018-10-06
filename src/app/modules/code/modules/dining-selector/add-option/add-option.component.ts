import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.css']
})
export class AddOptionComponent implements OnInit {
  @Input() duplicateValue: boolean;
  @Output() received = new EventEmitter<string>();
  option = '';

  optionFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();
  nothingEntered = `Nothing is entered. You don't want to eat?`;

  constructor() { }

  ngOnInit() {
    $('.newOption').hide();
    this.attachEvents();
  }

  attachEvents() {
    $('#btnnewOption').click(this.onSubmit.bind(this));
    $('#txtnewOption').keyup(function (e) {
      if (e.key === 'Enter') {
        this.onSubmit();
      }
    }.bind(this));
  }

  add(input: string): void {
    if (input) {
      this.received.emit(input);
    }
  }

  onSubmit() {
    const value = this.optionFormControl.value;
    this.optionFormControl.reset();
    this.add(value);
  }
}
