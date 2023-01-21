import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanceledAppointmentsPageRoutingModule } from './canceled-appointments-routing.module';

import { CanceledAppointmentsPage } from './canceled-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanceledAppointmentsPageRoutingModule
  ],
  declarations: [CanceledAppointmentsPage]
})
export class CanceledAppointmentsPageModule {}
