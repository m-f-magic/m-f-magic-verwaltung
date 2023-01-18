import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteHandlerService {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'offene Anfragen', url: '/open-inquirys', icon: 'mail-unread' },
    { title: 'Terminübersicht', url: '/appointment-overview', icon: 'calendar' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  constructor() { }

  getAppPages(){
    return this.appPages;
  }
}
