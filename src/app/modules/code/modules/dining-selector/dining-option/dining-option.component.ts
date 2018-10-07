import { Component, OnInit, Output, Injectable, Input, ViewChildren, QueryList, } from '@angular/core';
import { FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';

import { DiningService } from '../dining-service.service';
import { DiningOptions } from '../mock-options';
import { MessageService } from '../message.service';
import * as $ from 'jquery';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../../../../shared-module/message-dialog/message-dialog.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dining-option',
  templateUrl: './dining-option.component.html',
  styleUrls: ['./dining-option.component.css'],
})
export class DiningOptionComponent implements OnInit {
  @ViewChildren(MatExpansionPanel) viewPanels: QueryList<MatExpansionPanel>;

  diningOptions: string[] = new Array();
  selectedOption: string;
  optionFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();
  nothingEntered = `Nothing is entered. You don't want to eat?`;


  constructor(
    private diningService: DiningService,
    private messageService: MessageService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.attachEvents();
    this.getOptions();
  }

  attachEvents() {
    $('#btnnewOption').click(this.onSubmit.bind(this));
    $('#txtnewOption').keyup(function (e) {
      if (e.key === 'Enter') {
        this.onSubmit();
      }
    }.bind(this));
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
    if (value) {
      if (this.diningOptions.find(x => x.toUpperCase() === value.toUpperCase())) {
        this.messageService.add(`${value} already exists. I can't add it again...`);
      } else {
        this.diningOptions.push(value);
        this.messageService.add(`Added: ${value}`);
        this.sortOptions();
      }
    }
  }

  deleteOption(option: string): void {
    this.togglePanels(false);
    this.selectedOption = '';
    const optionIndex = this.diningOptions.indexOf(option);
    if (optionIndex !== -1) {
      this.diningOptions.splice(this.diningOptions.indexOf(option), 1);
      this.messageService.add(`Deleted: ${option}`);
    }
  }

  selectOption(): void {
    if (this.diningOptions.length === 0) {
      this.togglePanels(true);
      const dialogRef = this.dialog.open(MessageDialogComponent, {
        data: {
          title: 'No Options',
          message: `Nothing is in the list. I can't help you until you add something.`
        }
      });
      dialogRef.afterClosed().subscribe(() => {
        console.log('Dialog closed');
      });
    } else {
      this.togglePanels(false);
      const rand = Math.floor(Math.random() * this.diningOptions.length);
      this.selectedOption = this.diningOptions[rand];
      this.messageService.add(`Selected: ${this.selectedOption}`);
    }
  }

  onSubmit() {
    const value = this.optionFormControl.value;
    this.optionFormControl.reset();
    this.addOption(value);
  }

  resetEntry() {
    this.optionFormControl.reset();
  }

  private togglePanels(value: boolean) {
    this.viewPanels.forEach(p => value ? p.open() : p.close());
  }
}
