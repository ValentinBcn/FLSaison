import { Component, OnInit } from '@angular/core';
import { GlobaleVariablesService } from '../services/globale-variables.service';
import { Fruit, singleAliment, AlimentWithAdress, AlimentWithAdressAndType } from '../models/singleAliment';
import { alimentService } from '../services/aliments.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Route, Router, NavigationEnd, ActivationEnd, ActivationStart } from '@angular/router';
import { SingleAlimentComponent } from '../components/single-aliment/single-aliment.component';
import { Observable } from 'rxjs/Observable'
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'research-favorite-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.css']
})
export class ResearchPageComponent implements OnInit {

  objetRecherche: AlimentWithAdressAndType;
  existence: boolean;
  adress: string;
  constructor() {}

  ngOnInit() {
   

    this.objetRecherche = new AlimentWithAdressAndType('','','','')
    this.existence = false;

    if(localStorage.getItem('rechercheObject') !== 'undefined'){
    
      
    this.existence = true;
    
    var monObjet = JSON.parse(localStorage.getItem('rechercheObject'))
    
      if(monObjet.type === 'fruit'){
        this.adress = '/fruits'
      }

      else if  (monObjet.type === 'legumes') {
        this.adress = '/legumes'
      }

    this.objetRecherche = new AlimentWithAdressAndType(monObjet.title.rendered,monObjet.acf.photo,monObjet.title.rendered,this.adress)
    }
  }

}


   
  


