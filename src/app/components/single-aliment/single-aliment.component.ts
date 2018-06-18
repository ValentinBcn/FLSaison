import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { alimentService } from '../../services/aliments.service';
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

  realsDates = [];
  resultComparaison = [];

  laRoute: string;

  calendarArray = [];

  isFavorite : string; 

  constructor(private route: ActivatedRoute, private api: alimentService, private http: Http) {
  
    console.log("on a ", localStorage.getItem("Persil"))
   
    var tableauFruits = [];
    var tableauLegume = [];
  

    this.api.getInfoFruit().subscribe(
      (res1: Response) => {
        this.api.getInfoLegume().subscribe(
          (res2: Response) => {
            this.alimentName = this.api.seekAliment(this.route.snapshot.params['name'])[0]
            this.alimentImgUrl = this.api.seekAliment(this.route.snapshot.params['name'])[1]
            this.alimentSaison = this.api.seekAliment(this.route.snapshot.params['name'])[2]

            this.isFavorite= localStorage.getItem(this.alimentName);

            this.comparerDates(this.getDate(), this.alimentSaison)
            this.setRealDates();
           
            this.setCalendarArray();
            this.comparaison();
          
          }
        )
      }
    )
    this.api.getDonnees().then(data => {
      this.variabel = data;
    })

    this.getDate();

  }
  deleteDesFavoris(){
    localStorage.setItem(this.alimentName,'pas en favori')
  }
  addToFavoris(){
    localStorage.setItem(this.alimentName,'dans les favoris')
    console.log( localStorage.getItem(this.alimentName))
  }



  ngOnInit() {
  //this.isFavorite = localStorage.getItem(this.alimentName);
  
  };

  getDate() {
    var ladate = new Date()
    ladate.getMonth() + 1
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    this.month = tab_mois[ladate.getMonth()];
    return (tab_mois[ladate.getMonth()])
  }

  goBack(){
    window.history.back();
  }
  
  setCalendarArray(){
    var ladate = new Date();
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    this.month = tab_mois[ladate.getMonth()];
    for(var i=-1;i<2;i++){
      this.calendarArray.push({mois:tab_mois[ladate.getMonth()+i], value:false})
    }
  }

  setRealDates(){
    var ladate = new Date()
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    for(let i=-1; i<2;i++){
      this.realsDates.push(tab_mois[ladate.getMonth() + i]);
    }   
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

  comparaison(){
    var ladate = new Date()
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    //modifie le calendar array, si un mois du calendar Array est un mois de saison alors ce mois a une valeur=true
    for(var u=0;u<this.calendarArray.length;u++){
      for(var a=0;a<this.alimentSaison.length;a++){
        if(this.alimentSaison[a] === this.calendarArray[u].mois){
          this.calendarArray[u].value = true;
        }
      }
    }
  }

   
    
    

    
  

  comparerDeuxMois(premiere:string,deuxieme:string){
    if(premiere === deuxieme){
      return true;
    }
    else{
      return false;
    }
  }
}
