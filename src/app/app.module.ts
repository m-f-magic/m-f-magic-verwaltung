import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthConfig, AuthModule } from '@auth0/auth0-angular';
import { Capacitor } from '@capacitor/core';
import { LogoutButtonComponent } from './login/logout-button/logout-button.component';
import { ProfileComponent } from './login/profile/profile.component';
import { MaterialModule } from './basics/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var config: AuthConfig = {
  domain: "m-f-magic.eu.auth0.com",
  clientId: "fDSUc0uR4lNOLvCKNAwv2vGTEHZyPoZz",
  scope: "write read offline_access",
  audience: "magic_api"
  
};

if (Capacitor.getPlatform() != "web"){
  config.redirectUri = 'de.mundfmagic.magicApp://m-f-magic.eu.auth0.com/capacitor/de.mundfmagic.magicApp/callback'
};

@NgModule({
  declarations: [
    AppComponent,
    LogoutButtonComponent,
    ProfileComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule.forRoot(config),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
