import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-open-inquiry-dialog',
  templateUrl: './edit-open-inquiry-dialog.component.html',
  styleUrls: ['./edit-open-inquiry-dialog.component.scss'],
})
export class EditOpenInquiryDialogComponent implements OnInit {
  event: any;
  adress: any;
  appointment: any;
  customer: any;
  conversationItem: any;
  classicType: boolean; //true: Standardkond., false: individuelle

  additionalText: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.classicType);
  }

  cancel(){
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm(){
    return this.modalCtrl.dismiss('send inquiry', 'confirm');
  }

}
