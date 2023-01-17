import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DataRefresherComponent } from '../data/data-refresher/data-refresher.component';
import { DataRefresherModule } from '../data/data-refresher/data-refresher.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // DataRefresherModule
  ],
  declarations: [HomePage, DataRefresherComponent]
})
export class HomePageModule {}
