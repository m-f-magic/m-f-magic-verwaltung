import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenInquirysPageRoutingModule } from './open-inquirys-routing.module';

import { OpenInquirysPage } from './open-inquirys.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenInquirysPageRoutingModule,
    PageLayoutModule
  ],
  declarations: [OpenInquirysPage]
})
export class OpenInquirysPageModule {}
