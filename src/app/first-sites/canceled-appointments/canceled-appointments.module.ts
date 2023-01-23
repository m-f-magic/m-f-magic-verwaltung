import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanceledAppointmentsPageRoutingModule } from './canceled-appointments-routing.module';

import { CanceledAppointmentsPage } from './canceled-appointments.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanceledAppointmentsPageRoutingModule,
    PageLayoutModule
  ],
  declarations: [CanceledAppointmentsPage]
})
export class CanceledAppointmentsPageModule {}
