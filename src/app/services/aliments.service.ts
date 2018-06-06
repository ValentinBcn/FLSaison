import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { singleFruit } from '../models/singleFruit';
import 'rxjs/add/operator/map';

@Injectable()
export class alimentService {

  dataFruits = [];
  dataLegumes = [];

  cestUnFruit: boolean;
  tempName: string = "nothing";
  tempImgUrl: string = "yay";
  tempMonths: string[] = ["no months"];

  constructor(private http: Http) {
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
    return this.http.get("https://pwa2.marge-labo.com/wp-json/wp/v2/fruit")
  }

  getInfoLegume() {
    return this.http.get("https://pwa2.marge-labo.com/wp-json/wp/v2/legume")
  }

  getFake() {
    return this.http.get('')
  }
  seekFruit(name: string) {
    for (var i = 0; i < this.dataFruits.length; i++) {
      console.log(this.dataFruits[i].title.rendered);
      if (this.dataFruits[i].title.rendered === name) {
        return i;
      }
      this.cestUnFruit = true;
    }
  }

  seekLegume(name: string) {
    var laliment;
    for (let u = 0; u < this.dataLegumes.length; u++) {
      if (this.dataLegumes[u].title.rendered === name) {
        return u;
      }
    }
  }

  seekAliment(nom: string) {
    var reponse = [];
    var tabGene = this.dataLegumes.concat(this.dataFruits);

    for (var u = 0; u < tabGene.length; u++) {
      if (tabGene[u].title.rendered === nom) {
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



