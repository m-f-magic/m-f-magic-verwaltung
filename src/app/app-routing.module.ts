import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'open-inquirys',
    loadChildren: () => import('./first-sites/open-inquirys/open-inquirys.module').then( m => m.OpenInquirysPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login-page/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'appointment-overview',
    loadChildren: () => import('./first-sites/appointment-overview/appointment-overview.module').then( m => m.AppointmentOverviewPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'edit-inquirys',
    loadChildren: () => import('./first-sites/edit-inquirys/edit-inquirys.module').then( m => m.EditInquirysPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'stock',
    loadChildren: () => import('./first-sites/stock/stock.module').then( m => m.StockPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'past-appointments',
    loadChildren: () => import('./first-sites/past-appointments/past-appointments.module').then( m => m.PastAppointmentsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'canceled-appointments',
    loadChildren: () => import('./first-sites/canceled-appointments/canceled-appointments.module').then( m => m.CanceledAppointmentsPageModule), canActivate: [AuthGuard]
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
