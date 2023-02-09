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
  events = new BehaviorSubject(null);
  customers = new BehaviorSubject(null);
  conversationItems = new BehaviorSubject(null);
  configDefaultOffer = new BehaviorSubject(null);

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

  putEndpoint(endpoint: string, object: any, id: string){
    // put Endpoint
    fetch(`https://api.m-f-magic.de/${endpoint}/${id}`, {
      method: 'PUT',
      headers: new Headers({'Authorization': 'Bearer '+this.token, 'Content-Type': 'application/json'}),
      body: JSON.stringify(object)
    })
      .then(response => console.log(response.json()))
  }

  postEndpoint(endpoint: string, object: any, id: string){
    // post Endpoint
    fetch(`https://api.m-f-magic.de/${endpoint}/${id}`, {
      method: 'POST',
      headers: new Headers({'Authorization': 'Bearer '+this.token, 'Content-Type': 'application/json'}),
      body: JSON.stringify(object)
    })
      .then(response => console.log(response.json()))
  }

  loadApi(){
    // load Address
    this.loadEndpoint("appointments", this.appointments);
    this.loadEndpoint("addresses", this.address);
    this.loadEndpoint("events", this.events);
    this.loadEndpoint("customers", this.customers);
    this.loadEndpoint("conversationItems", this.conversationItems);
    this.loadEndpoint("offers", this.configDefaultOffer);
  }

  // get functions

  getAdress(oid){
    for (let adress of this.address.getValue()){
      if (adress._id.$oid == oid){
        return adress; //founded correct address
      };
    };
    return null;
  }

  getEvent(oid){
    for (let event of this.events.getValue()){
      if (event._id.$oid == oid){
        return event; //founded correct event
      };
    };
    return null;
  }

  getAppointment(oid){
    for (let appointment of this.appointments.getValue()){
      if (appointment._id.$oid == oid){
        return appointment; //founded correct appointment
      };
    };
    return null;
  }

  getCustomer(oid){
    for (let cust of this.customers.getValue()){
      if (cust._id.$oid == oid){
        return cust; //founded correct customer
      };
    };
    return null;
  }

  getConversationItem(oid){
    for (let conItem of this.conversationItems.getValue()){
      if (conItem._id.$oid == oid){
        return conItem; //founded correct conversationItem
      };
    };
    return null;
  }
}