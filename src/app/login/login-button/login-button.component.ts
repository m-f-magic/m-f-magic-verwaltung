import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { LoadingController, Platform } from '@ionic/angular';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-login-button',
  template: `<ion-button (click)="login()">Login</ion-button>`,
})
export class LoginButtonComponent {
  constructor(public auth: AuthService, private plt: Platform, private loadingCtrl: LoadingController) {}

  async login() {
    // loading component
    const loadingIndicator = await this.loadingCtrl.create({
      message: "Bitte melde Dich an..."
    });

    await loadingIndicator.present();
    this.auth.isAuthenticated$.subscribe(() => {
      this.loginSuccesful(loadingIndicator);
    })

    // perform login through auth0
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

  loginSuccesful(loadingIndicator: HTMLIonLoadingElement){
    loadingIndicator.dismiss();
    
  }
}