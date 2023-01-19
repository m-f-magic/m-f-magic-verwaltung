import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentOverviewPageRoutingModule } from './appointment-overview-routing.module';

import { AppointmentOverviewPage } from './appointment-overview.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentOverviewPageRoutingModule,
    PageLayoutModule
  ],
  declarations: [
    AppointmentOverviewPage,
    AppointmentItemComponent
  ]
})
export class AppointmentOverviewPageModule {}
