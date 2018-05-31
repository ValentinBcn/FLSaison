import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../../services/apiConnectservice';
import { singleFruit} from '../../models/singleFruit';
import { Response } from '@angular/http';
@Component({
  selector: 'app-list-fruits',
  templateUrl: './list-fruits.component.html',
  styleUrls: ['./list-fruits.component.css'],
  providers: [ApiConnectService]
})
export class ListFruitsComponent implements OnInit {

  listeDeFruits : singleFruit[] = [];
  tableaudebase = [];
  constructor(private apiConnect: ApiConnectService) { 
   
  }

  ngOnInit() {
    this.onGetFruits();
  }

  onGetFruits(){
    this.apiConnect.getInfoFruit()
    .subscribe(
     // (res)=>console.log(res),
      (res2: Response)=>{
      
        this.tableaudebase = res2.json();
        //console.log("tableau = " ,this.tableaudebase[0].title.rendered);
       // console.log("tableau = " ,this.tableaudebase[0].acf.photo);
       // console.log("tableau = " ,this.tableaudebase[0].acf.saison)
       console.log(this.tableaudebase.length);
       for(let i = 0; i<this.tableaudebase.length; i++){
        this.listeDeFruits.push(new singleFruit(this.tableaudebase[i].title.rendered,this.tableaudebase[i].acf.photo,this.tableaudebase[i].acf.saison))
       }
          //this.listeDeFruits.push(new singleFruit("nom","url",["un","deux"]))
      }
    );
  }

  onShowFruit(){
    console.log(this.listeDeFruits[2].imageUrl);
  }
}
