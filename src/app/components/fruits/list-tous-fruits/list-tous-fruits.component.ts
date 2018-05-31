import { Component, OnInit } from '@angular/core';
import { alimentService } from '../../../services/aliments.service';
import { singleFruit } from '../../../models/singleFruit';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-tous-fruits',
  templateUrl: './list-tous-fruits.component.html',
  styleUrls: ['./list-tous-fruits.component.css']
})
export class ListTousFruitsComponent implements OnInit {
  listeDeFruits: singleFruit[] = [];
  tableaudebase = [];
  tableauTrie: singleFruit[] = [];
  month: string;
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
          console.log(this.tableaudebase.length);
          for (let i = 0; i < this.tableaudebase.length; i++) {
            this.listeDeFruits.push(new singleFruit(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
          }
        }
      );
  }

  myFunction(value) {
    this.apiConnect.seekFruit(value);
    
  }

}
