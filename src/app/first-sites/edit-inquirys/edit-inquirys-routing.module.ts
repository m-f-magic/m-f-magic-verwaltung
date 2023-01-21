import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditInquirysPage } from './edit-inquirys.page';

const routes: Routes = [
  {
    path: '',
    component: EditInquirysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditInquirysPageRoutingModule {}
