import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationModel } from '../shared-module/models/navigationModel';

@Component({
  selector: 'app-wishlist',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`,
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  title = `Admiralfeb's Wishlist`;

  navItems: NavigationModel[] = [
    { text: 'Wishlist Home', link: 'main'},
    { text: 'Clothing', link: 'clothing'},
    { text: 'Home Stuff', link: 'home'},
    { text: 'Money Related', link: 'money'},
    { text: 'Other', link: 'other'},
    { text: 'Technology', link: 'tech'},
    { text: 'Video', link: 'video'},
  ];
  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
