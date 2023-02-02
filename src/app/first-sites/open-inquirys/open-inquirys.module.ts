import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenInquirysPageRoutingModule } from './open-inquirys-routing.module';

import { OpenInquirysPage } from './open-inquirys.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';
import { InquiryItemComponent } from './inquiry-item/inquiry-item.component';

import { MatDividerModule } from '@angular/material/divider';
import { EditOpenInquiryDialogComponent } from './edit-open-inquiry-dialog/edit-open-inquiry-dialog.component';
import { ShortEventDetailsModule } from 'src/app/magic-components/short-event-details/short-event-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenInquirysPageRoutingModule,
    PageLayoutModule,
    MatDividerModule,
    ShortEventDetailsModule
  ],
  declarations: [OpenInquirysPage, InquiryItemComponent, EditOpenInquiryDialogComponent]
})
export class OpenInquirysPageModule {}
