import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationModel } from '../shared-module/models/navigationModel';

@Component({
  selector: 'app-wishlist',
  template: `<content-with-side-nav [headerText]="title" [navItems]="navItems"></content-with-side-nav>`,
  styles: [],
})
export class WishlistComponent implements OnInit {
  title = `Admiralfeb's Wishlist`;

  navItems: NavigationModel[] = [
    { text: 'Wishlist Home', link: 'main'},
    { text: 'Audio and Visual', link: 'av'},
    { text: 'Clothing', link: 'clothing'},
    { text: 'Crafting', link: 'crafting'},
    { text: 'Home Stuff', link: 'home'},
    { text: 'Money Related', link: 'money'},
    { text: 'Other', link: 'other'},
    { text: 'Technology', link: 'tech'},
  ];
  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
