import { Component, OnInit } from '@angular/core';
import { alimentService } from '../../../services/aliments.service';
import { Response } from '@angular/http';
import { Fruit } from '../../../models/singleAliment';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationStart } from '@angular/router';


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
  pageFruits: boolean;
  arrayColor = ["#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"
    , "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"]
  constructor(private apiConnect: alimentService, private router: Router) {

  }

  ngOnInit() {
    this.onGetFruits();
  }

  sendColor(color: string) {
    localStorage.setItem('colorToDisplay', color.toString().slice(1));
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
