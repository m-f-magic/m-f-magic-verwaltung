import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastAppointmentsPageRoutingModule } from './past-appointments-routing.module';

import { PastAppointmentsPage } from './past-appointments.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastAppointmentsPageRoutingModule,
    PageLayoutModule
  ],
  declarations: [PastAppointmentsPage]
})
export class PastAppointmentsPageModule {}
