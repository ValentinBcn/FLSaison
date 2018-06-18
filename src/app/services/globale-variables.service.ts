import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class GlobaleVariablesService {
 private simpleVariable = "lol"

  constructor() {
   
   }

 

   changeSimpleVariable(value){
     this.simpleVariable = value;
   }

   get avoirVariable(){
     return this.simpleVariable
   }



}
