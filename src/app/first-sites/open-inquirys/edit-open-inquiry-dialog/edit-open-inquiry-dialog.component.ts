import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
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

  constructor(private modalCtrl: ModalController, private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.dataHandler.configDefaultOffer.subscribe(data => {
      this.defaultOffer = data;
    });

    if (this.event._cls =="Event.EventERLERNEN"){
      this.event['basePrice'] = this.defaultOffer.ERLERNEN.prices.bacePrice;
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

  confirm(){
    return this.modalCtrl.dismiss('send inquiry', 'confirm');
  }

}
