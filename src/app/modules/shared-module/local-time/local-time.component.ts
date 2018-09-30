import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-local-time',
  template: `<span>{{ localTime }} Local Time</span>`,
  styles: []
})
export class LocalTimeComponent implements OnInit {
  @Input() inputDate: string;
  @Output() localTime: string;
  constructor() { }

  ngOnInit() { this.localTime = this.getLocalTime(this.inputDate); }

  getLocalTime(utcTime: string): string {
    const date = new Date(utcTime);
    const tz = date.getTimezoneOffset();

    const sign = tz > 0 ? '-' : '+';
    const oHours = this.pad(Math.floor(Math.abs(tz) / 60), 2);
    const oMinutes = this.pad(Math.abs(tz) % 60, 2);

    // let tzOffset = sign + oHours + ':' + oMinutes;
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const aa = (hours > 11) ? 'pm' : 'am';
    if (hours > 12) {
      hours -= 12;
    }
    hours = hours === 0 ? 12 : hours;

    const localTime = hours + ':' + this.pad(minutes, 2) + aa;
    return localTime;
  }

  pad(n, width, z = '0'): string {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}
