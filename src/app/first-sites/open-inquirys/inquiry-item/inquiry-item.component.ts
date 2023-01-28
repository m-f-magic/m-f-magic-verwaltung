import { Component, Input, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/data/data-handler.service';

@Component({
  selector: 'app-inquiry-item',
  templateUrl: './inquiry-item.component.html',
  styleUrls: ['./inquiry-item.component.scss'],
})
export class InquiryItemComponent implements OnInit {
  @Input() event: any;
  adress: any;
  now: Date;
  appointment: any = null;

  constructor(private dataHandler: DataHandlerService) {
    this.now = new Date();
   }

  ngOnInit() {
    if (this.event.hasOwnProperty("appointments")){
      this.appointment = this.dataHandler.getAppointment(this.event.appointments.slice(-1)[0].$oid);

      if (this.appointment.hasOwnProperty("location")){
        this.adress = this.dataHandler.getAdress(this.appointment.location.$oid);
      }      
    };
  }

  openDetailedEvent(){
    console.log("BLUB");
  }
}
