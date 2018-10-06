import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  codeinProcess = [
    {
      title: 'Dining Selector',
      status: 'Functional',
      statusClass: 'bg-warning px-1',
      description:
        'Enter items in and let a RNG (Random Number Generator) pick for you.' +
        '\n Has the default options of Chipotle, FireHouse Subs, and Noodles and Co.'
    },
    {
      title: 'RuneScape User Info',
      status: 'Planned',
      statusClass: 'bg-info text-white px-1',
      description: 'Utilizing an API by Jagex, this app will access your RuneScape profile and display info.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
