import { Component, OnInit } from '@angular/core';
import { singleLegume } from '../../../models/singleLegume';
import { alimentService } from '../../../services/aliments.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-tous-legumes',
  templateUrl: './list-tous-legumes.component.html',
  styleUrls: ['./list-tous-legumes.component.css']
})
export class ListTousLegumesComponent implements OnInit {
  tableauDeBase = [];
  listdeLegumes : singleLegume[] = [];
  month: string;
  tableauLegumeTrie : singleLegume[] = [];
  constructor(private apiConnect: alimentService) { }

  ngOnInit() {
    this.getDate();
    this.getInfosLegume();
  }

  getInfosLegume(){
    this.apiConnect.getInfoLegume().subscribe(
      (res: Response)=>{
        this.tableauDeBase = res.json()
        for(let i = 0; i<this.tableauDeBase.length;i++){
          this.listdeLegumes.push(new singleLegume(this.tableauDeBase[i].title.rendered, this.tableauDeBase[i].acf.photo, this.tableauDeBase[i].acf.saison))       
        }
      }
    )
  }

  myFunction(value){
    this.apiConnect.seekLegume(value);
   }

   
  getDate(){
    var ladate=new Date()
    ladate.getMonth()+1
    var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    console.log("mois actuel",tab_mois[ladate.getMonth()] );
    this.month = tab_mois[ladate.getMonth()];
    return( tab_mois[ladate.getMonth()])
  }

}
