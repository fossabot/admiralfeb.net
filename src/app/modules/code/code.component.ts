import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationModel } from '../shared-module/models/navigationModel';

@Component({
  selector: 'app-code',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`,
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  tipNavButton = 'Show/Hide the Navigation Panel';
  title = `Admiralfeb's Code`;
  navItems: NavigationModel[] = [
    { text: 'Code Home', link: 'main'},
    { text: 'Dining Selector', link: 'dining_selector'},
  ];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
