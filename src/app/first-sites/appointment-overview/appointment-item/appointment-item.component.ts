import { Component, Input, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/data/data-handler.service';

@Component({
  selector: 'appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss'],
})
export class AppointmentItemComponent implements OnInit {
  @Input() appointment: any;
  adress: any;
  now: Date;

  constructor(private dataHandler: DataHandlerService) {
    this.now = new Date();
   }

  ngOnInit() {
    if (this.appointment.hasOwnProperty("location")){
      this.adress = this.dataHandler.getAdress(this.appointment.location.$oid);
    } else {
      this.adress = {"street": null, "zip": null, "city": null};
    }
  }

  openDetailedAppointment(){
    console.log("BLUB");
  }

}
