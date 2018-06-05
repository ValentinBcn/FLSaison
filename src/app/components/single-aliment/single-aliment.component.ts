import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alimentService } from '../../services/aliments.service';
import { recherche } from '../../services/recherche.service';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-single-aliment',
  templateUrl: './single-aliment.component.html',
  styleUrls: ['./single-aliment.component.css'],
  providers: []
})
export class SingleAlimentComponent implements OnInit {

  alimentName: string;
  alimentSaison: string[];
  alimentImgUrl: string;
  public variabel;
  month: string;
  tableauDeValeur = [];
  deSaison: boolean;
 // value = "banane";
  constructor(private route: ActivatedRoute, private api: alimentService, private apiRecherche: recherche, private http: Http) {

   console.log("c'est de saison", this.deSaison);
    //var numero = this.api.seekAliment(this.route.snapshot.params['name'])
  
   // var tableaudedonnee = this.api.seekAliment(this.route.snapshot.params['name']);
   // console.log(tableaudedonnee)
    var tableauFruits = [];
    var tableauLegume = [];
    //var tableauTotal = [];
    this.api.getInfoFruit().subscribe(
      (res1: Response) => {
      //  tableauFruits = res1.json()
        this.api.getInfoLegume().subscribe(
          (res2: Response) => {
           // tableauLegume = res2.json();
          //  console.log('et la', this.api.seekAliment(this.route.snapshot.params['name']))
            this.alimentName = this.api.seekAliment(this.route.snapshot.params['name'])[0]
            this.alimentImgUrl = this.api.seekAliment(this.route.snapshot.params['name'])[1]
            this.alimentSaison = this.api.seekAliment(this.route.snapshot.params['name'])[2]
            this.comparerDates(this.getDate(),this.alimentSaison)
          }
        )
      }

    )

    //this.api.getInfoFruit().map(res => res.json()).subscribe(res => this.variabel = res)

    this.api.getDonnees().then(data => {
      console.log(data);
      this.variabel = data;
     
  //do here what you want

    })
    
    console.log("ça a interet de marcher!",this.variabel)
    this.getDate();
    //console.log("alors c'est", typeof(this.variabel));
    
   // this.comparerDates(this.getDate(),this.alimentSaison);
  }



  ngOnInit() {

  };
  getDate() {
    var ladate = new Date()
    ladate.getMonth() + 1
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    this.month = tab_mois[ladate.getMonth()];
    return (tab_mois[ladate.getMonth()])
  }

  comparerDates(actuell: string, lesMois: string[]) {

    for (let u = 0; u < lesMois.length; u++) {
      if (actuell === lesMois[u]) {
        this.deSaison = true;
        break;
      }
      else {
        this.deSaison = false;
      }
    }
  }





}
