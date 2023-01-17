import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DataRefresherComponent } from './data-refresher.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  // declarations: [DataRefresherComponent],
  // exports: [DataRefresherComponent]
})
export class DataRefresherModule {}
