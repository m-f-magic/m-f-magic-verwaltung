import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentOverviewPageRoutingModule } from './appointment-overview-routing.module';

import { AppointmentOverviewPage } from './appointment-overview.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';
import { ShortEventDetailsModule } from 'src/app/magic-components/short-event-details/short-event-details/short-event-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentOverviewPageRoutingModule,
    PageLayoutModule,
    ShortEventDetailsModule
  ],
  declarations: [
    AppointmentOverviewPage,
    AppointmentItemComponent
  ]
})
export class AppointmentOverviewPageModule {}
