import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  token: string;
  appointments: any;

  constructor(private auth: AuthService) {
    this.getToken();

    
  }

  getToken(){
    this.auth.getAccessTokenSilently().subscribe(token => {
        this.token = token;
        this.loadApi(); //initial data fetch
        console.log(this.token);
    });
  }

  loadApi(){
    this.appointments = fetch(
      'https://api.m-f-magic.de/appointments/',
      {headers: new Headers({
        'Authorization': 'Bearer '+this.token})
      }).then(r => r.json()).then(j => { this.appointments=j; console.log(j); });

    console.log(this.appointments);
  }
}