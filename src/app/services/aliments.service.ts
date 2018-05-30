import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { singleFruit} from '../models/singleFruit';
import 'rxjs/add/operator/map';

@Injectable()
export class alimentService {

  dataFruits = [];
  dataLegumes = [];

  tempName: string = "rien";
  tempImgUrl: string ="rien";
  tempMonths: string[] = ["no months"];

  constructor(private http: Http) {
    this.getInfoFruit().subscribe(
      (res: Response)=>{
        this.dataFruits = res.json();
      }
    )

    this.getInfoLegume().subscribe(
      (res: Response)=>{
        this.dataLegumes = res.json();
      }
    )
   }

  getInfoFruit(){
    return this.http.get("http://pwa2.marge-labo.com/wp-json/wp/v2/fruit")
  }

  getInfoLegume(){
    return this.http.get("http://pwa2.marge-labo.com/wp-json/wp/v2/legume")
  }


  seekFruit(name: string){
    for(let i=0;i<this.dataFruits.length;i++){
      if(this.dataFruits[i].title.rendered === name){
        this.tempName = this.dataFruits[i].title.rendered;
        this.tempImgUrl = this.dataFruits[i].acf.photo
        this.tempMonths =  this.dataFruits[i].acf.saison
      }
    }
  }
  
  seekLegume(name:string){

    for(let u=0; u<this.dataLegumes.length;u++){
      if(this.dataLegumes[u].title.rendered === name){
        this.tempName = this.dataLegumes[u].title.rendered;
        this.tempImgUrl = this.dataLegumes[u].acf.photo
        this.tempMonths =  this.dataLegumes[u].acf.saison
      }
    }
    console.log("légume:",this.tempImgUrl)
  }
}



