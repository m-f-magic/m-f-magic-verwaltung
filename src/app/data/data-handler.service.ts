import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  token: string;
  appointments = new BehaviorSubject(null);
  address = new BehaviorSubject(null);

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

  loadEndpoint(endpoint: string, subject: BehaviorSubject<any>){
    // load Endpoint
    fetch(`https://api.m-f-magic.de/${endpoint}/`,{headers: new Headers(
      {
        'Authorization': 'Bearer '+this.token})
      })
        .then(r => r.json())
        .then(j => { //data received
          subject.next(j);
          // this.appointments.next(j);
          console.log(`Reloaded ${endpoint}:\n`, j);
    });
  }

  loadApi(){
    // load Address
    this.loadEndpoint("appointments", this.appointments);
    this.loadEndpoint("addresses", this.address);
  }
}