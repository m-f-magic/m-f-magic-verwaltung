import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { userInfo } from 'os';

@Component({
  selector: 'app-open-inquirys',
  templateUrl: './open-inquirys.page.html',
  styleUrls: ['./open-inquirys.page.scss'],
})
export class OpenInquirysPage implements OnInit {

  constructor(public auth: AuthService) { }

  public  appointments: any
  ngOnInit() {
    var token_temp=this.auth.getAccessTokenSilently();
    
    
    token_temp.subscribe(token =>    fetch('https://api.m-f-magic.de/appointments/',{headers: new Headers({'Authorization': 'Bearer '+token})}).then(r => r.json()).then(j => { this.appointments=j; console.log(j); }));
    console.log(this.appointments)
    
  }
    

}
