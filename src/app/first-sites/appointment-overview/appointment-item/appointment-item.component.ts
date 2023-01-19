import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss'],
})
export class AppointmentItemComponent implements OnInit {
  @Input() appointment: any;
  now: Date;

  constructor() {
    this.now = new Date();
   }

  ngOnInit() {}

}
