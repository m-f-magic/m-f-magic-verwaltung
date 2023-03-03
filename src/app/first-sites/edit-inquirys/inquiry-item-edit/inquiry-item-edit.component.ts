import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataHandlerService } from 'src/app/data/data-handler.service';
import { SingleEventDataService } from 'src/app/magic-components/single-event-data/single-event-data.service';
import { EditExistingInquiryDialogComponent } from '../edit-existing-inquiry-dialog/edit-existing-inquiry-dialog.component';

@Component({
  selector: 'app-inquiry-item-edit',
  templateUrl: './inquiry-item-edit.component.html',
  styleUrls: ['./inquiry-item-edit.component.scss'],
  providers:[SingleEventDataService]
})
export class InquiryItemEditComponent implements OnInit {
  @Input() event: any;

  constructor(public data: SingleEventDataService, private modalCtrl: ModalController,) {
   }

  ngOnInit() {
    this.data.initialize(this.event);
    console.log(this.data);
  }

  async editEvent(){
    const modal = await this.modalCtrl.create({
      component: EditExistingInquiryDialogComponent,
      componentProps: {
        event: this.event
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
