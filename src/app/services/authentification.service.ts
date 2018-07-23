import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()

export class authentificationService{

  private username;
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private _http: Http) {}

  urlPost  = "https://pwa2.marge-labo.com//wp-json";

  changeLogIn(value: boolean){
    this.loggedInStatus = value
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() : boolean{
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }

  sendRequest(a: string,b: string){
    return this._http.post(this.urlPost+ '/jwt-auth/v1/token', {
      username: a,
      password: b
    })
  }
  


}