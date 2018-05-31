import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { alimentService } from './aliments.service';
import {Observable} from 'rxjs';
import { singleFruit } from '../models/singleFruit';
@Injectable()

export class recherche{
    nomGlobal: string;
    constructor(private apiAliment: alimentService){}

    getName(): Observable<singleFruit[]>{
        var mesfruits2 = []
        var leNom;
        this.apiAliment.getInfoFruit().subscribe(
            (res)=> {

               
                mesfruits2 = res.json(),
                console.log("le resultat est",mesfruits2);
                leNom = mesfruits2[1].acf.photo;
                return( new singleFruit(mesfruits2[0].acf.photo,mesfruits2[0].acf.photo,mesfruits2[0].acf.saison))
            } 
           
        );
    
        
        
       // this.mes = this.apiAliment. ;
       
        /*for (let u = 0; u < this.dataFruits.length; u++) {
            console.log("le resultat est :",this.dataFruits[u].title.rendered);
          if (this.dataFruits[u].title.rendered === value) {
            console.log("le resultat est :",this.dataFruits[u].title.rendered);
            
            return(this.dataFruits[u].title.rendered)
          
          }
        }*/
      }
}