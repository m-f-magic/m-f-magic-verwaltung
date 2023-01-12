import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-login-button',
  template: `<ion-button (click)="login()">Login</ion-button>`,
})
export class LoginButtonComponent {
  constructor(public auth: AuthService, private plt: Platform) {}

  login() {
    if (Capacitor.getPlatform() === "web"){
      console.log("DESKTOP LOGIN");
      this.auth.loginWithRedirect();
    } else {
      console.log("MOBILEPHONE LOGIN");    
      this.auth
        .buildAuthorizeUrl()
        .pipe(mergeMap((url) => Browser.open({ url, windowName: '_self' })))
        .subscribe();
    };
  }
}