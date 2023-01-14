import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { tap } from 'rxjs/operators';


const returnTo = 'de.mundfmagic.magicApp://m-f-magic.eu.auth0.com/capacitor/de.mundfmagic.magicApp/callback';



@Component({
  selector: 'app-logout-button',
  template: `<ion-button (click)="logout()"><ion-icon slot="start" name="log-out-outline"></ion-icon>Logout</ion-button>`,
  // templateUrl: 'logout-button.component.html'
})
export class LogoutButtonComponent {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService
    ) { }

  async logout() {
    console.log("logout...");

    // perform login through auth0
    if (Capacitor.getPlatform() === "web"){
      console.log("DESKTOP LOGIN");
      this.auth.logout({
        returnTo: this.document.location.origin
      });
    } else {
      console.log("MOBILEPHONE LOGIN");    
      this.auth
        .buildLogoutUrl({ returnTo })
        .pipe(
          tap((url) => {
            this.auth.logout({localOnly: true});
            Browser.open({url});
          })
        )
        .subscribe();
    }
    
  }

}