import { Component, Input, OnInit } from '@angular/core';
// import { SingleEventDataComponent } from '../../single-event-data/single-event-data.component';
import { SingleEventDataService } from '../../single-event-data/single-event-data.service';

@Component({
  selector: 'app-short-event-details',
  templateUrl: './short-event-details.component.html',
  styleUrls: ['./short-event-details.component.scss'],
  providers:[SingleEventDataService]
})
export class ShortEventDetailsComponent implements OnInit {
  @Input() event: any;

  constructor(public data: SingleEventDataService) { 
    
  }

  ngOnInit() {
    this.data.initialize(this.event);
  }

}
