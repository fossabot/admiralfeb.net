import { Component, OnInit, Output, Injectable, Input, ViewChildren, QueryList, } from '@angular/core';
import { FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';

import { DiningService } from '../../dining-service.service';
import { DiningOptions } from '../../mock-options';
import { MessageService } from '../../message.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/modules/shared-module/components/message-dialog/message-dialog.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'code-dining-selector-dining-option',
  templateUrl: './dining-option.component.html',
  styleUrls: ['./dining-option.component.scss'],
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
    this.getOptions();
  }

  getOptions(): void {
    this.diningService.getOptions().subscribe(
      ops => this.addOptions(ops)
    );
  }

  defaultOptions(): void {
    this.togglePanels(false);
    this.diningOptions = new Array();
    this.getOptions();
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
        this.togglePanels(false);
        this.messageService.add(`${value} already exists. I can't add it again...`);
        const dialogRef = this.dialog.open(MessageDialogComponent, {
          data: {
            title: 'Already Added',
            message: `The item '${value}' is already in the list. No duplicates allowed.`
          }
        });
        dialogRef.afterClosed().subscribe(() => {
          console.log('Dialog closed');
        });
      } else {
        this.diningOptions.push(value);
        this.messageService.add(`Added: ${value}`);
        this.sortOptions();
      }
    } else {
      const dialogRef = this.dialog.open(MessageDialogComponent, {
        data: {
          title: 'Nothing Entered',
          message: this.nothingEntered
        }
      });
      dialogRef.afterClosed().subscribe(() => {
        console.log('Dialog closed');
      });
    }
  }

  deleteOption(option: string): void {
    this.togglePanels(false);
    this.selectedOption = '';
    if (this.diningOptions.length > 1) {
      const optionIndex = this.diningOptions.indexOf(option);
      if (optionIndex !== -1) {
        this.diningOptions.splice(this.diningOptions.indexOf(option), 1);
        this.messageService.add(`Deleted: ${option}`);
      }
    } else {
      const dialogRef = this.dialog.open(MessageDialogComponent, {
        data: {
          title: 'Cannot Delete all items',
          message: `At least one item must be in the list for this application to work.`
        }
      });
      dialogRef.afterClosed().subscribe(() => {
        console.log('Dialog closed');
      });

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
