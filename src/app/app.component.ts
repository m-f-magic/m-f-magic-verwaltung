import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { mergeMap } from 'rxjs/operators';
import { SiteHandlerService } from './basics/site-handler.service';


const callbackUri = 'de.mundfmagic.magicApp://m-f-magic.eu.auth0.com/capacitor/de.mundfmagic.magicApp/callback';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages: any;
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public auth: AuthService, private ngZone: NgZone, private siteHandler: SiteHandlerService) {
    this.appPages = this.siteHandler.getAppPages();
  }

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
