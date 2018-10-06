import { Component, OnInit, Output, Injectable, Input, } from '@angular/core';
import { DiningService } from '../dining-service.service';
import { DiningOptions } from '../mock-options';
import { MessageService } from '../message.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dining-option',
  templateUrl: './dining-option.component.html',
  styleUrls: ['./dining-option.component.css'],
})
export class DiningOptionComponent implements OnInit {
  diningOptions: string[] = new Array();
  selectedOption: string;
  constructor(
    private diningService: DiningService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getOptions();
  }

  getOptions(): void {
    this.diningService.getOptions().subscribe(
      ops => this.addOptions(ops)
    );
  }

  sortOptions(): void {
    this.diningOptions.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    this.messageService.add('Sorted Options');
  }

  addOptions(values: string[]): void {
    for (let i = 0; i < values.length; i++) {
      const element = values[i];
      this.addOption(element);
    }
  }

  addOption(value: string): void {
    $('#txtnewOption').css('background-color', '');
    if (this.diningOptions.find(x => x.toUpperCase() === value.toUpperCase())) {
      this.messageService.add(`${value} already exists. I can't add it again...`);
    } else {
      this.diningOptions.push(value);
      this.messageService.add(`Added: ${value}`);
      this.sortOptions();
    }
  }

  deleteOption(option: string): void {
    this.selectedOption = '';
    const optionIndex = this.diningOptions.indexOf(option);
    if (optionIndex !== -1) {
      this.diningOptions.splice(this.diningOptions.indexOf(option), 1);
      this.messageService.add(`Deleted: ${option}`);
    }
  }

  selectOption(): void {
    if (this.diningOptions.length === 0) {
      $('.newOption').show();
      $('#txtnewOption').css('background-color', 'pink');
      alert('Nothing is in the list. I can\'t help you until you add something.');
    } else {
      const rand = Math.floor(Math.random() * this.diningOptions.length);
      this.selectedOption = this.diningOptions[rand];
      this.messageService.add(`Selected: ${this.selectedOption}`);
    }
  }

}
