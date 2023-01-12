import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  logedIn: boolean = false;

  constructor(
    private auth: AuthService,
    private navCtrl: NavController
  ){
    this.auth.isAuthenticated$.subscribe(() => {
      this.navCtrl.navigateRoot('/home');
      this.logedIn = true;
    });
  }

  async canActivate(): Promise<boolean> {
    if (this.logedIn = false){
      this.navCtrl.navigateRoot('/login');
    } else {
      this.navCtrl.navigateRoot('/home');
    }
    return this.logedIn;
  };
  
}
