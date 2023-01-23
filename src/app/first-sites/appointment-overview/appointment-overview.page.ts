import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/data/data-handler.service';

@Component({
  selector: 'app-appointment-overview',
  templateUrl: './appointment-overview.page.html',
  styleUrls: ['./appointment-overview.page.scss'],
})
export class AppointmentOverviewPage implements OnInit {
  appointments: any;
  adress: any;

  constructor(private dataHandler: DataHandlerService) {
    // LOAD API DATA
    this.loadApiData();


    // test
    let id = this.appointments[0].location.$oid;
    console.log(this.adress.find(id => id.$oid));
    console.log(id)
    console.log(this.dataHandler.getAdress(id));
   }

  ngOnInit() {
  }

  loadApiData(){
    // import Appointment Data
    this.dataHandler.appointments.subscribe(data => {
      this.appointments = data;
    });

    // import Adress Data
    this.dataHandler.address.subscribe(data => {
      this.adress = data;
    });
    
  }

}
