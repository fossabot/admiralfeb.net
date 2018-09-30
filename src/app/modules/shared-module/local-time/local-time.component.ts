import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-local-time',
  template: `<span>{{ localTime }}</span>`,
  styles: []
})
export class LocalTimeComponent implements OnInit {
  @Input() inputTime: string;
  @Output() localTime: string;
  constructor() { }

  ngOnInit() { this.getLocalTime(this.inputTime); }

  getLocalTime(utcTime: string): string {
    const date = new Date(utcTime);
    const tz = date.getTimezoneOffset();

    const sign = tz > 0 ? '-' : '+';
    const oHours = this.pad(Math.floor(Math.abs(tz) / 60), 2);
    const oMinutes = this.pad(Math.abs(tz) % 60, 2);

    // let tzOffset = sign + oHours + ':' + oMinutes;

    const localTime = this.pad(date.getHours, 2) + ':' + this.pad(date.getMinutes, 2);
    return localTime;
  }

  pad(n, width, z = '0'): string {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}
