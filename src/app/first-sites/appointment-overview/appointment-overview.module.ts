import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentOverviewPageRoutingModule } from './appointment-overview-routing.module';

import { AppointmentOverviewPage } from './appointment-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentOverviewPageRoutingModule
  ],
  declarations: [AppointmentOverviewPage]
})
export class AppointmentOverviewPageModule {}
