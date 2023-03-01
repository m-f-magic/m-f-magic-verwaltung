import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInquirysPageRoutingModule } from './edit-inquirys-routing.module';

import { EditInquirysPage } from './edit-inquirys.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';
import { InquiryItemEditComponent } from './inquiry-item-edit/inquiry-item-edit.component';
import { MatDividerModule } from '@angular/material/divider';
import { ShortEventDetailsModule } from 'src/app/magic-components/short-event-details/short-event-details.module';
import { EditExistingInquiryDialogComponent } from './edit-existing-inquiry-dialog/edit-existing-inquiry-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInquirysPageRoutingModule,
    PageLayoutModule,
    MatDividerModule,
    ShortEventDetailsModule
  ],
  declarations: [EditInquirysPage, InquiryItemEditComponent, EditExistingInquiryDialogComponent]
})
export class EditInquirysPageModule {}
