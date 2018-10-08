import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface ZEarrings {
  stone: string;
  month: string;
  count: number;
}

const zEarrings: ZEarrings[] = [
  {
    stone: 'Garnett',
    month: '01-January',
    count: 1
  },
  {
    stone: 'Amethyst',
    month: '02-February',
    count: 1
  },
  {
    stone: 'Aquamarine',
    month: '03-March',
    count: 1
  },
  {
    stone: 'Diamond',
    month: '04-April',
    count: null
  },
  {
    stone: 'Emerald',
    month: '05-May',
    count: 1
  },
  {
    stone: 'Alexandrite',
    month: '06-June',
    count: null
  },
  {
    stone: 'Ruby',
    month: '07-July',
    count: null
  },
  {
    stone: 'Peridot',
    month: '08-August',
    count: null
  },
  {
    stone: 'Sapphire',
    month: '09-September',
    count: null
  },
  {
    stone: 'Tourmaline',
    month: '10-October',
    count: null
  },
  {
    stone: 'Topaz',
    month: '11-November',
    count: null
  },
  {
    stone: 'Zircon',
    month: '12-December',
    count: null
  },
  {
    stone: 'Tanzanite',
    month: '',
    count: 1
  },
];

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  displayedColumns: string[] = ['stone', 'month', 'count'];
  dataSource = new MatTableDataSource(zEarrings);

  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
