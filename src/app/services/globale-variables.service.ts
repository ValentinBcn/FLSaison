import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class GlobaleVariablesService {
 private simpleVariable: string;

 globalData;
  constructor() {
   
   }


   get avoirVariable(){
     return this.simpleVariable
   }



}
