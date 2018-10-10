import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  statuses = [
    {
      title: 'Running',
      class: 'bg-success text-white px-1 rounded',
      // tslint:disable-next-line:max-line-length
      text: `This is running. It can be accessed from the navigation panel.<br>If on mobile, tap the <span class="material-icons md-12">menu</span> icon at the top of this page to open the panel.`
    },
    {
      title: 'Planned',
      class: 'bg-info text-white px-1 rounded',
      text: `Still in the planning phase. Not yet coded.`
    }
  ];
  codeinProcess = [
    {
      title: 'Dining Selector',
      status: 'Running',
      statusClass: 'bg-success text-white px-1 rounded',
      description:
        'Enter items in and let a RNG (Random Number Generator) pick for you.' +
        '\n Has the default options of Chipotle, FireHouse Subs, and Noodles and Co.'
    },
    {
      title: 'RuneScape User Info',
      status: 'Planned',
      statusClass: 'bg-info text-white px-1 rounded',
      description: 'Utilizing an API by Jagex, this app will access your RuneScape profile and display info.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
