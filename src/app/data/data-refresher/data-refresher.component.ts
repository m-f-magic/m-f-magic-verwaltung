import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-data-refresher',
  templateUrl: './data-refresher.component.html'
})
export class DataRefresherComponent implements OnInit {

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {}

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.dataHandler.loadApi();
      event.target.complete();
    }, 500);
  };
}
