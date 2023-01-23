import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteHandlerService {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'offene Anfragen', url: '/open-inquirys', icon: 'mail-unread' },
    { title: 'Anfragenbearbeitung', url: '/edit-inquirys', icon: 'pencil'},
    { title: 'Terminübersicht', url: '/appointment-overview', icon: 'calendar' },
    { title: 'Lager', url: '/stock', icon: 'cube' },
    { title: 'vergangene Auftritte', url: '/past-appointments', icon: 'archive' },
    { title: 'Absagen', url: '/canceled-appointments', icon: 'trash-bin' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  constructor() { }

  getAppPages(){
    return this.appPages;
  }
}
