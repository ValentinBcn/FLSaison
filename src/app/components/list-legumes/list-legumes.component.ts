import { Component, OnInit } from '@angular/core';
import { singleLegume } from '../../models/singleLegume';
import { alimentService } from '../../services/aliments.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-legumes',
  templateUrl: './list-legumes.component.html',
  styleUrls: ['./list-legumes.component.css']
})
export class ListLegumesComponent implements OnInit {
  tableauDeBase = [];
  listdeLegumes : singleLegume[] = [];
  constructor(private apiConnect: alimentService) { }

  ngOnInit() {
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

}
