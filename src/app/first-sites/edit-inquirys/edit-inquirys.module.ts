import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInquirysPageRoutingModule } from './edit-inquirys-routing.module';

import { EditInquirysPage } from './edit-inquirys.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInquirysPageRoutingModule,
    PageLayoutModule
  ],
  declarations: [EditInquirysPage]
})
export class EditInquirysPageModule {}