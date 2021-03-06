import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { alimentService } from '../../services/aliments.service';
import { Http, Response } from '@angular/http';
import * as $ from 'jquery';
import { $$ } from 'protractor';
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
  tableauDeValeur = [];
  deSaison: string;
  realsDates = [];
  resultComparaison = [];
  toggle = false;
  laRoute: string;
  pageFruits: string;
  calendarArray = [];
  isFavorite: string;
  color: string;

  pageChargee: boolean = false;
  constructor(private route: ActivatedRoute, private api: alimentService, private http: Http, private router: Router) {
  }

  deleteDesFavoris() {
    this.isFavorite = 'false';
    var data = {}
    localStorage.removeItem(this.alimentName)
  }
  addToFavoris(nom: string, img: string) {
    this.toggle = !this.toggle;
    this.isFavorite = 'true';

    var data = {
      'adresse': window.location.href,
      'image': img,
      'nom': nom,
      'isFavorite': 'true'
    }
    localStorage.setItem(this.alimentName, JSON.stringify(data))
  }

  ngOnInit() {

    var tableauFruits = [];
    var tableauLegume = [];

    this.api.getInfoFruit().subscribe(
      (res1: Response) => {
        this.api.getInfoLegume().subscribe(
          (res2: Response) => {
            this.alimentName = this.api.seekAliment(this.route.snapshot.params['name'])[0]
            this.alimentImgUrl = this.api.seekAliment(this.route.snapshot.params['name'])[1]
            this.alimentSaison = this.api.seekAliment(this.route.snapshot.params['name'])[2]
            
            this.comparerDates(this.getDate(), this.alimentSaison)
           
            var tempData = localStorage.getItem(this.alimentName);
            if (tempData != null) {
              this.isFavorite = JSON.parse(tempData).isFavorite;
            }
            else if (tempData === undefined) {
              this.isFavorite = 'false';
            }

            this.setRealDates();
            this.setCalendarArray();
            this.comparaison(); //fonction qui voit si c'est un fruit/légume de saison
            this.pageChargee = true;
            console.log('pageChargée,'+this.pageChargee)
          }
        )
      }
    )

    this.getDate();
    this.color = localStorage.getItem('colorToDisplay');
    this.color = '#' + this.color;
    $(document).ready(function($){
      setTimeout(function(){
          $('.trans-grow').addClass('grow');
      }, 600);
  });
  };

  getDate() {
    var ladate = new Date()
    ladate.getMonth() + 1
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    this.month = tab_mois[ladate.getMonth()];

    return (tab_mois[ladate.getMonth()])
  }

  goBack() {
    window.history.back();
  }

  setCalendarArray() {
    var ladate = new Date();
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    this.month = tab_mois[ladate.getMonth()];
    for (var i = -1; i < 2; i++) {
      this.calendarArray.push({ mois: tab_mois[ladate.getMonth() + i], value: false })
    }
  }

  setRealDates() {
    var ladate = new Date()
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    for (let i = -1; i < 2; i++) {
      this.realsDates.push(tab_mois[ladate.getMonth() + i]);
    }
  }

  comparerDates(moisActuel: string, lesMois: string[]) {
    if(lesMois.indexOf(moisActuel)>-1){
      this.deSaison = "true";
    }
    else{this.deSaison = "false"}
  
  }

  comparaison() {
    var ladate = new Date()
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    //modifie le calendar array, si un mois du calendar Array est un mois de saison alors ce mois a une valeur=true
    for (var u = 0; u < this.calendarArray.length; u++) {
      for (var a = 0; a < this.alimentSaison.length; a++) {
        if (this.alimentSaison[a] === this.calendarArray[u].mois) {
          this.calendarArray[u].value = true;
        }
      }
    }
  }

  isAFruit() {
    var URL = window.location.href;
    if (URL.indexOf('fruit') > -1) {
      return true;
    }
    return false;
  }


}
