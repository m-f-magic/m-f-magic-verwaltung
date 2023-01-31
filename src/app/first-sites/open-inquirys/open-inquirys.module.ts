import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenInquirysPageRoutingModule } from './open-inquirys-routing.module';

import { OpenInquirysPage } from './open-inquirys.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';
import { InquiryItemComponent } from './inquiry-item/inquiry-item.component';

import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenInquirysPageRoutingModule,
    PageLayoutModule,
    MatDividerModule
  ],
  declarations: [OpenInquirysPage, InquiryItemComponent]
})
export class OpenInquirysPageModule {}
