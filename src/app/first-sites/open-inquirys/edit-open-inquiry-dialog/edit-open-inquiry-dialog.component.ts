import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

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

  additionalText: string;

  constructor(private zone: NgZone, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // const el = this.eventTarget.nativeElement as HTMLElement;
      // el.addEventListener('click', e => {
      //   this.zone.run(() => {
      //   });
      // })
    });
    console.log(this.classicType);
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
