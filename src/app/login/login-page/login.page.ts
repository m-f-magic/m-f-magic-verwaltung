import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth: AuthService, private router: Router) { 
    this.auth.isAuthenticated$.subscribe(() => {
      this.loginSucces();
    })
  }

  ngOnInit() {
  }

  loginSucces(){
    console.log("verifiziert");
    this.router.navigate(['home']);
  }

}

