import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobaleVariablesService } from './globale-variables.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { singleAliment, AlimentWithAdress, AlimentWithAdressAndType } from '../models/singleAliment';

@Injectable()
export class alimentService {

  dataFruits = [];
  dataLegumes = [];

  objetDeRecherche : string;

  resultatDeRecherche : AlimentWithAdress;
  cestUnFruit: boolean;
  tempName: string = '';
  tempImgUrl: string = '';
  tempMonths: string[] = [];

  constructor(private http: Http, private otherService: GlobaleVariablesService, private route: ActivatedRoute) {
   
    this.getInfoFruit().subscribe(
      (res: Response) => {
        this.dataFruits = res.json();
    
      })
    this.getInfoLegume().subscribe(
      (res: Response) => {
        this.dataLegumes = res.json();
      }
    )

  
  }
  getInfoFruit() {
    return this.http.get("https://pwa2.marge-labo.com/wp-json/wp/v2/fruit?per_page=50")
  }


  getInfoLegume() {
    return this.http.get("https://pwa2.marge-labo.com/wp-json/wp/v2/legume?per_page=50")
  }

  getFake() {
    return this.http.get('')
  }
  seekFruit(name: string) {
    for (var i = 0; i < this.dataFruits.length; i++) {
      if (this.dataFruits[i].title.rendered === name) {
        return i;
      }
      this.cestUnFruit = true;
    }
  }

  changeObjetDeRecherche(value){
    this.objetDeRecherche = value;
  }

  get resultatDeLaRecherche(){
    return this.resultatDeRecherche
  }
  get recupObjDeRecherche(){
    return this.objetDeRecherche
  }
  seekLegume(name: string) {
    var laliment;
    for (let u = 0; u < this.dataLegumes.length; u++) {
      if (this.dataLegumes[u].title.rendered === name) {
        return u;
      }
    }
  }


  rechercheParmiLesAliments(value: string){
    //La première lettre en majuscule
    var totalArray = this.dataFruits.concat(this.dataLegumes)
   // totalArray = t
    var value2 = value.charAt(0).toUpperCase() + value.slice(1)

    //On supprime la dernière lettre (si c'est au pluriel par exemple)
    var value3 = value.slice(0,-1) 
  
    //1ere lettre en majuscules et on supprime la dernière (si le type entre bananes par ex)
    var valuetemp = value.charAt(0).toUpperCase() + value.slice(1) 
    var value4 = valuetemp.slice(0,-1)
  

    for (let i=0; i<totalArray.length;i++){
      
      if(totalArray[i].title.rendered === value ||
        totalArray[i].title.rendered === value2 ||
        totalArray[i].title.rendered === value3 ||
        totalArray[i].title.rendered === value4 ){
        this.resultatDeRecherche = new AlimentWithAdressAndType(value,totalArray[i].acf.photo,value,totalArray[i].type)

        return totalArray[i]
      }
    }
  
  }

  seekAliment(nom: string) {
   
    var reponse = [];
   
    var tabGene = this.dataLegumes.concat(this.dataFruits);
    var temp  = nom[0].toUpperCase() + nom.slice(1);
    var temp2 = nom.slice(0,nom.length-1);
    var temp3 = temp2[0].toUpperCase() + nom.slice(1);
    temp3 = temp3.slice(0,nom.length-1)

    for (var u = 0; u < tabGene.length; u++) {
     
      if (tabGene[u].title.rendered === nom || tabGene[u].title.rendered === temp || tabGene[u].title.rendered === temp2 || tabGene[u].title.rendered === temp3) {
        reponse.push(tabGene[u].title.rendered);
        reponse.push(tabGene[u].acf.photo);
        reponse.push(tabGene[u].acf.saison);
      }
     
    }

    return reponse;
  }

  getDonnees() {
    return new Promise((resolve, reject) => {
      this.http.get('https://pwa2.marge-labo.com/wp-json/wp/v2/legume')
        .subscribe(
          data => {
            resolve(data)
          },
          error => {
            reject(error);
          },
      );
    });
  }

 
}



