import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private r: ActivatedRoute) {
    router.events.forEach((event) => {
      console.log(event);
    });
  }

  ngOnInit() {

  }


}
