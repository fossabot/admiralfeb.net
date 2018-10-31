import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  bShowMessages = false;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.bShowMessages = event.checked;
  }
}
