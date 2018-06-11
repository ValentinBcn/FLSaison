import { Component, OnInit } from '@angular/core';
import { singleAliment } from '../../models/singleAliment';
import { alimentService } from '../../services/aliments.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {
  checkboxModel = true;
  Fruits = [];
  Legume = [];
  tableauTotal = [[],[],[],[]];
  tableauModifie = [];
  tableauSansDoublon = [[],[],[],[]];
  compteurDeClick =0 ;
  valeurJanvier: boolean; valeurFevrier: boolean; valeurMars: boolean;
  arrayDesUrls = [];
  arrayDesNames = [];

  constructor(private api: alimentService) {
    this.api.getInfoFruit().subscribe(
      (res: Response) => {
        this.Fruits = res.json();
        this.througYear(this.Fruits)
      }
    )

    this.api.getInfoLegume().subscribe(
      (res: Response) => {
        this.Legume = res.json();
        this.througYear(this.Legume)
       console.log("le tableau total",this.tableauTotal);

      }
    )

    
   }
   
   updateDoublonJanvier(){
     this.valeurJanvier = !this.valeurJanvier;
     if(this.valeurJanvier === true){
     
        this.compteurDeClick ++;
    
     }
     else{
       
      this.compteurDeClick--;

     }
    
   }

   updateDoublonFevrier(){
    this.valeurFevrier = !this.valeurFevrier;
    if(this.valeurFevrier === true){
     this.compteurDeClick++;

    }
    else{
      this.compteurDeClick--;
  
    }
  
  }

  updateDoublonMars(){
    this.valeurMars = !this.valeurMars;
    if(this.valeurMars === true){
     this.compteurDeClick++;
    }
    else{
      this.compteurDeClick--;
    }
  }

  checkDoublon(index:number){
   console.log("tu as cliqué sur Janvier")
    if(this.valeurJanvier==false ||this.valeurFevrier==false ||this.valeurMars==false){
      this.tableauModifie.splice(index,1)
      console.log(this.tableauModifie)
    }
    else{
      this.tableauModifie = this.tableauModifie.concat(this.tableauTotal[index])
      console.log("et le tableau modifié", this.tableauModifie)
      
      var array = [["apple","null"],["didier","lol"],["apple","null"]];
      
      //console.log("l'épuration donne",Array.from(new Set(array[1])))
    
      
    
    }
   
    
  }

  tri(arrayDeImgUrl, arrayDeNom, arrayTotal){

    for(let i = 0;i < arrayTotal.length; i++){
      if(arrayDeNom.indexOf(arrayTotal[i][0]) == -1){
        arrayDeNom.push(arrayTotal[i][0]);   
      }
    }

  for(let i = 0;i < arrayTotal.length; i++){
    if(arrayDeImgUrl.indexOf(arrayTotal[i][1]) == -1){
      arrayDeImgUrl.push(arrayTotal[i][1]);
      }
    }
  }

  
    
  /*

    if(this.compteurDeClick >= 2){
      var out = [], obj={},j;
      for(var i=0;i<this.tableauModifie.length;i++){
        for(var a=0; a<this.tableauModifie[i].length;a++){
          for(var index=0; index<this.tableauModifie[i].length;index++){
            obj[this.tableauModifie[i][a]] = 0 

          }

          
        }
    
      }
      this.tableauModifie = [[],[],[],[]];
      for (j in obj){
        out.push(j);
      }

      console.log(out)

    }*/
  
    
  



  ngOnInit() {}

  througYear(tableau){
    var lesMois = ["Janvier","Février","Mars","Avril"];
    for(var u=0; u<lesMois.length;u++){
      this.checkMonth(tableau,lesMois[u],u)
    }
  }

  checkMonth(array, month:string,index:number){
    var lol = 0;
    for(var a=0;a<array.length;a++){
      for(var u=0;u<array[a].acf.saison.length;u++){
        if(array[a].acf.saison[u] === month){
          this.tableauTotal[index].push([[array[a].title.rendered, array[a].acf.photo]]);
        }
      }
    }
  }

}
