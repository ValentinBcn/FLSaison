import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { alimentService } from '../../services/aliments.service';

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

  constructor(private route: ActivatedRoute, private api: alimentService) { 
    this.alimentName = this.api.tempName;
    this.alimentSaison = this.api.tempMonths;
    this.alimentImgUrl = this.api.tempImgUrl;
    console.log("l'aliment est ", this.api.tempName)
    this.getDate();
    this.comparerDates(this.getDate(),this.alimentSaison);
    console.log(this.deSaison)
    
  }

  ngOnInit() {};
  
  getDate(){
    var ladate=new Date()
     
       ladate.getMonth()+1
    var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    console.log("mois actuel",tab_mois[ladate.getMonth()] );
    this.month = tab_mois[ladate.getMonth()];
    return( tab_mois[ladate.getMonth()])
  }

  comparerDates(actuell:string, lesMois: string[]){
    
    console.log("les mois sont :",lesMois)
    for(let u=0; u<lesMois.length;u++){
      if (actuell === lesMois[u]){
        this.deSaison = true;
        break;
      }
      else{
        this.deSaison = false;
      }
    }

    }
    
  
  


}
