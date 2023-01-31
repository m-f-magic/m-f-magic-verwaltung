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
  conversationItem: any;
  customer: any;

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

    this.customer = this.dataHandler.getCustomer(this.event.customer.$oid);

    this.conversationItem = this.dataHandler.getConversationItem(this.event.conversation[0].$oid);
    
    // this.conversationItem.notes = this.conversationItem.notes.replaceAll('\n', '<br/>');
    // console.log(this.conversationItem.notes);
  }

  sendClassicOffer(){
    console.log("BLUB");
  }

  sendIndividualOffer(){
    console.log("Individuelle");
  }
  
  manual(){
    console.log("Manuell bearbeiten")
  }
}
