import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-general-event-details',
  templateUrl: './edit-general-event-details.component.html',
  styleUrls: ['./edit-general-event-details.component.scss'],
})
export class EditGeneralEventDetailsComponent implements OnInit {
  @Input() data:any;

  editable = new BehaviorSubject(true);
  constructor() { }

  ngOnInit() {}

  onChangeStartDate(value){
    let newDate = new Date(value);
    this.data.appointment.startTime.$date = newDate.getTime();
  }

  onChangeEndDate(value){
    let newDate = new Date(value);
    this.data.appointment.endTime.$date = newDate.getTime();
  }

  changeEditable(){
    if (this.editable.getValue()){
      this.editable.next(false);
    } else {
      this.editable.next(true);
    }
  }

}
