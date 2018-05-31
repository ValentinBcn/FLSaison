import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alimentService } from '../../services/aliments.service';
import { recherche } from '../../services/recherche.service';

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

  month: string;

  deSaison: boolean = true;
  value = "banane";
  constructor(private route: ActivatedRoute, private api: alimentService, private apiRecherche: recherche ) {
    
    
    console.log("constructeur du singleAliment");  
    //console.log(this.apiRecherche.getName("hello"));
   // this.alimentName = this.apiRecherche.getName(this.route.snapshot.params['name']);
    console.log("l'aliment est", this.apiRecherche.getName());
    this.alimentSaison = this.api.tempMonths;
    this.alimentImgUrl = this.api.tempImgUrl;

    
    
    this.getDate();
    this.comparerDates(this.getDate(), this.alimentSaison);
   
   
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
