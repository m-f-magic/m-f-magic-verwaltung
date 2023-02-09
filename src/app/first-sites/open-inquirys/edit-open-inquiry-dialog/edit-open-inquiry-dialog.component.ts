import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataHandlerService } from 'src/app/data/data-handler.service';

@Component({
  selector: 'app-edit-open-inquiry-dialog',
  templateUrl: './edit-open-inquiry-dialog.component.html',
  styleUrls: ['./edit-open-inquiry-dialog.component.scss'],
})
export class EditOpenInquiryDialogComponent implements OnInit {
  // @ViewChild('eventTarget', { static: true }) eventTarget: ElementRef;
  
  event: any;
  adress: any;
  appointment: any;
  customer: any;
  conversationItem: any;
  classicType = new BehaviorSubject(true); //true: Standardkond., false: individuelle

  defaultOffer: any;

  additionalText: string;

  constructor(
    private modalCtrl: ModalController,
    private dataHandler: DataHandlerService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.dataHandler.configDefaultOffer.subscribe(data => {
      this.defaultOffer = data;
    });

    if (this.event._cls =="Event.EventERLERNEN"){
      this.event['basePrice'] = this.defaultOffer.ERLERNEN.prices.basePrice;
      this.event['pricePerPerson'] = this.defaultOffer.ERLERNEN.prices.pricePerChildren;
      if (this.adress.hasOwnProperty("driveCostTotal")) {
        this.event['driveCostTotal'] = this.adress.driveCostTotal;
      } else {
        this.event['driveCostTotal'] = this.defaultOffer.ERLERNEN.prices.driveCostMin;
      }
    }

    }

  change(){
    if (this.classicType.getValue()){
      this.classicType.next(false);
    } else {
      this.classicType.next(true);
    }
    console.log(this.classicType);
  }

  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async confirm(){
    const {role} = await this.presentAlert();
    if (role == 'confirm'){
      // const loading 

      this.dataHandler.putEndpoint("events", this.event, this.event._id.$oid);

      return this.modalCtrl.dismiss('send inquiry', 'confirm');
    }

    return null
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Angebot absenden',
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
