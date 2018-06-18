import { Component, OnInit } from '@angular/core';
import { alimentService } from '../../../services/aliments.service';
import { Response } from '@angular/http';
import { Fruit } from '../../../models/singleAliment';



@Component({
  selector: 'app-list-tous-fruits',
  templateUrl: './list-tous-fruits.component.html',
  styleUrls: ['./list-tous-fruits.component.css'],

})
export class ListTousFruitsComponent implements OnInit {
  listeDeFruits: Fruit[] = [];
  tableaudebase = [];
  tableauTrie: Fruit[] = [];
  month: string;
  filteredStatus: string;
  constructor(private apiConnect: alimentService) {

  }

  ngOnInit() {
    this.onGetFruits();
  }

  onGetFruits() {
    this.apiConnect.getInfoFruit()
      .subscribe(
        (res2: Response) => {
          this.tableaudebase = res2.json();
          for (let i = 0; i < this.tableaudebase.length; i++) {
            this.listeDeFruits.push(new Fruit(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
          }
        }
      );
  }

  myFunction(value) {
    this.apiConnect.seekFruit(value);
    
  }

}
