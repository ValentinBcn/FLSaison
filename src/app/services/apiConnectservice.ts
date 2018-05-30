import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiConnectService {

  constructor(private http: Http) { }

  getInfoFruit(){
    return this.http.get("http://pwa2.marge-labo.com/wp-json/wp/v2/fruit")
  }

  getInfoLegume(){
    return this.http.get("http://pwa2.marge-labo.com/wp-json/wp/v2/legume")
  }

}
