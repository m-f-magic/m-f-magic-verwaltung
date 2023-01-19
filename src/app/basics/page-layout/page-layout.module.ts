import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLayoutComponent } from './page-layout.component';
import { DataRefresherComponent } from 'src/app/data/data-refresher/data-refresher.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [PageLayoutComponent, DataRefresherComponent],
  exports: [PageLayoutComponent, DataRefresherComponent]
})
export class PageLayoutModule {}
