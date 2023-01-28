import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { userInfo } from 'os';
import { DataHandlerService } from '../../data/data-handler.service';

@Component({
  selector: 'app-open-inquirys',
  templateUrl: './open-inquirys.page.html',
  styleUrls: ['./open-inquirys.page.scss'],
})
export class OpenInquirysPage implements OnInit {
  appointments: any;
  adress: any;
  events: any;

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

    // import Event Data
    this.dataHandler.events.subscribe(data => {
      this.events = data;
    });
    
  }
}
