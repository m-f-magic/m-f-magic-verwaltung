import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataHandlerService } from 'src/app/data/data-handler.service';
import { EditOpenInquiryDialogComponent } from '../edit-open-inquiry-dialog/edit-open-inquiry-dialog.component';

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

  constructor(private dataHandler: DataHandlerService, private modalCtrl: ModalController, private alertController: AlertController) {
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

  async openOffer(){
    const modal = await this.modalCtrl.create({
      component: EditOpenInquiryDialogComponent,
      componentProps: {
        event: this.event,
        adress: this.adress,
        appointment: this.appointment,
        customer: this.customer,
        conversationItem: this.conversationItem
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
  
  async manual(){
    const {role} = await this.presentAlertManual();
    if (role == 'confirm'){
      // const loading 

      this.event.status = 999;

      this.dataHandler.putEndpoint("events", this.event, this.event._id.$oid);
    }
  }

  async presentAlertManual() {
    const alert = await this.alertController.create({
      header: 'Manuell bearbeiten',
      buttons: [
        {
          text: 'Nein',
          role: 'cancel'
        },
        {
          text: 'Ja',
          role: 'confirm'
        }
      ]
    });

    await alert.present();

    return await alert.onDidDismiss();
  }

}
