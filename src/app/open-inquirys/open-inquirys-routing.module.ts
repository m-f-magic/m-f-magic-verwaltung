import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenInquirysPage } from './open-inquirys.page';

const routes: Routes = [
  {
    path: '',
    component: OpenInquirysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenInquirysPageRoutingModule {}
