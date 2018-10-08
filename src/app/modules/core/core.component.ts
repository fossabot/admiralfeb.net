import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

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
    const future = new Date('2018-10-07T17:45:00Z');
    const futuretime = future.getTime();
    const currenttime = new Date().getTime();
    const counter = interval(1000).pipe(
      map((x) => {
        return (new Date().getTime() > future.getTime()) ? false : true;
      }));
      const sub = counter.subscribe((x) => {
        this.passed = x ? false : true;
      });
  }

}
