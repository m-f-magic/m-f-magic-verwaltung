import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NavController } from '@ionic/angular';
import { AuthGuardGuard } from '../auth-guard.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth: AuthService, private authGuard: AuthGuardGuard, private navCtrl: NavController) { 
    this.auth.isAuthenticated$.subscribe(() => {
      console.log("verifiziert");
      this.navCtrl.navigateRoot('/home');
    })
  }

  ngOnInit() {
  }

}

