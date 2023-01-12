import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { mergeMap } from 'rxjs/operators';


const callbackUri = 'de.mundfmagic.magicApp://m-f-magic.eu.auth0.com/capacitor/de.mundfmagic.magicApp/callback';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'offene Anfragen', url: '/open-inquirys', icon: 'mail-unread' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public auth: AuthService, private ngZone: NgZone) {}

  ngOnInit(): void {
    // Use Capacitor's App plugin to subscribe to the `appUrlOpen` event
  
    if (Capacitor.getPlatform() != "web"){
      console.log("register Callback Handler");
      App.addListener('appUrlOpen', ({ url }) => {
        // Must run inside an NgZone for Angular to pick up the changes
        // https://capacitorjs.com/docs/guides/angular
        
        this.ngZone.run(() => {
          if (url?.startsWith(callbackUri)) {
            // If the URL is an authentication callback URL..
            if (
              url.includes('state=') &&
              (url.includes('error=') || url.includes('code='))
            ) {
              // Call handleRedirectCallback and close the browser
              this.auth
                .handleRedirectCallback(url)
                .pipe(mergeMap(() => Browser.close()))
                .subscribe();
            } else {
              Browser.close();
            }
          }
        });
      });
    };
  }
}
