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
import { AutosizeModule } from 'ngx-autosize';
import { ConversationItemsHistoryComponent } from './conversation-items-history/conversation-items-history.component';
import { MaterialModule } from 'src/app/basics/material.module';
import { EditGeneralEventDetailsComponent } from './edit-general-event-details/edit-general-event-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInquirysPageRoutingModule,
    PageLayoutModule,
    MaterialModule,
    ShortEventDetailsModule,
    AutosizeModule
  ],
  declarations: [EditInquirysPage, InquiryItemEditComponent, EditExistingInquiryDialogComponent, ConversationItemsHistoryComponent, EditGeneralEventDetailsComponent]
})
export class EditInquirysPageModule {}
