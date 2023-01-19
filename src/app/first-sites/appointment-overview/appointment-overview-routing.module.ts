import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentOverviewPage } from './appointment-overview.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentOverviewPageRoutingModule {}
