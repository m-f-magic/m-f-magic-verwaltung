import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-refresher',
  templateUrl: './data-refresher.component.html'
})
export class DataRefresherComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };
}
