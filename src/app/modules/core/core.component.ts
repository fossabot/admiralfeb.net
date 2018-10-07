import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  title = 'Admiralfeb\'s Website';
  passed = false;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    const future = new Date(`'2018-10-07T17:45:00Z'`);
    this.passed = (future.getTime() < new Date().getTime()) ? true : false;
  }

}
