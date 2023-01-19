import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/data/data-handler.service';

@Component({
  selector: 'app-appointment-overview',
  templateUrl: './appointment-overview.page.html',
  styleUrls: ['./appointment-overview.page.scss'],
})
export class AppointmentOverviewPage implements OnInit {
  appointments: any;

  now: Date;

  constructor(private dataHandler: DataHandlerService) {
    // LOAD API DATA
    this.loadApiData();
    
    this.now = new Date();

   }

  ngOnInit() {
  }

  loadApiData(){
    // import Appointment Data
    this.dataHandler.appointments.subscribe(data => {
      this.appointments = data;
    });
    
  }

}
