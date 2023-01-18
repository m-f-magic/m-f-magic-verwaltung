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


  constructor(private dataHandler: DataHandlerService) { }
  ngOnInit() {
    // this.appointments = this.dataHandler.appointments;
    console.log(this.dataHandler.appointments);
    
  }
    

}
