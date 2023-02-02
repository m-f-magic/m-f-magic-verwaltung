import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortEventDetailsComponent } from './short-event-details.component';
import { IonicModule } from '@ionic/angular';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [ShortEventDetailsComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatDividerModule,
    // SingleEventDataModule
  ],
  exports: [ShortEventDetailsComponent]
})
export class ShortEventDetailsModule { }
