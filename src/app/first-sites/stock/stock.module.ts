import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockPageRoutingModule } from './stock-routing.module';

import { StockPage } from './stock.page';
import { PageLayoutModule } from 'src/app/basics/page-layout/page-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockPageRoutingModule,
    PageLayoutModule
  ],
  declarations: [StockPage]
})
export class StockPageModule {}
