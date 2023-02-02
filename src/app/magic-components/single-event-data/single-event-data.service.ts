import { Injectable, Input } from '@angular/core';
import { DataHandlerService } from 'src/app/data/data-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SingleEventDataService {
  event: any;
  appointment: any = undefined;
  adress: any = undefined;
  customer: any = undefined;
  conversationItems: any = [];
  
  constructor(private dataHandler: DataHandlerService) { }

  initialize(event: any){
    // load event Data
    this.event = event;

    // load appointment Data
    if (this.event.hasOwnProperty("appointments")){
      this.appointment = this.dataHandler.getAppointment(this.event.appointments.slice(-1)[0].$oid);

      // load adress Data
      if (this.appointment.hasOwnProperty("location")){
        this.adress = this.dataHandler.getAdress(this.appointment.location.$oid);
      }      
    };

    // load customer Data
    this.customer = this.dataHandler.getCustomer(this.event.customer.$oid);

    // load conversation Data
    for (var conItem of this.event.conversation){
      console.log(conItem);
      this.conversationItems.push(this.dataHandler.getConversationItem(conItem.$oid));
    };
  }  
}
