import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  token: string;
  appointments = new BehaviorSubject(null);

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
    // this.appointments.next(
    fetch('https://api.m-f-magic.de/appointments/',{headers: new Headers(
      {
        'Authorization': 'Bearer '+this.token})
      })
        .then(r => r.json())
        .then(j => { //data received
          this.appointments.next(j);
          console.log(j);
        });
  }
}