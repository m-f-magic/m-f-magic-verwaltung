import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { SingleEventDataService } from 'src/app/magic-components/single-event-data/single-event-data.service';

@Component({
  selector: 'app-edit-existing-inquiry-dialog',
  templateUrl: './edit-existing-inquiry-dialog.component.html',
  styleUrls: ['./edit-existing-inquiry-dialog.component.scss'],
  providers:[SingleEventDataService]
})
export class EditExistingInquiryDialogComponent implements OnInit {
  event: any;
  public sender: any;

  constructor(
    public data: SingleEventDataService,
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    public auth: AuthService
    ) {
      this.auth.user$.subscribe(value => {
        this.sender = value.email.replace("@m-f-magic.de","");
      })
    }

  ngOnInit() {
    this.data.initialize(this.event);
    console.log(this.data);
  }

  cancel(){
    console.log(this.sender)
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async confirm(){
    const {role} = await this.presentAlert();
    if (role == 'confirm'){
      // const loading 


      // this.dataHandler.putEndpoint("events", this.event, this.event._id.$oid);
      // this.dataHandler.putEndpoint("offers", {"sender": this.sender, "additionalText": this.additionalText, "eventID": this.event._id.$oid}, this.event._id.$oid);

      return this.modalCtrl.dismiss('edited event', 'confirm');
    }

    return null
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Event fertig bearbeitet?',
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