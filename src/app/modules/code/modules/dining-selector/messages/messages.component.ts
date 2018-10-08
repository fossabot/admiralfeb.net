import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  bShowMessages = true;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.bShowMessages = event.checked;
  }
}
