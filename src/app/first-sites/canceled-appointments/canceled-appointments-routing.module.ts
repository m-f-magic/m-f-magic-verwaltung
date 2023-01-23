import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanceledAppointmentsPage } from './canceled-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: CanceledAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanceledAppointmentsPageRoutingModule {}
