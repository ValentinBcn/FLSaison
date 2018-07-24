import { Component, OnInit } from '@angular/core';
import { alimentService } from '../../../services/aliments.service';
import { Response } from '@angular/http';
import { Fruit } from '../../../models/singleAliment';

@Component({
  selector: 'app-Fruits-de-saison',
  templateUrl: './Fruits-de-saison.component.html',
  styleUrls: ['./Fruits-de-saison.component.css']
})
export class FruitsDeSaisonComponent implements OnInit {


  listeDeFruits: Fruit[] = [];
  tableaudebase = [];
  tableauTrie: Fruit[] = [];
  month: string;
  arrayColor = ["#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"
  , "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"
  , "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"
  , "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"]
  constructor(private apiConnect: alimentService) {}

  ngOnInit() {
    this.getDate();
    this.onGetFruits();
  }

  onGetFruits() {
    this.apiConnect.getInfoFruit()
      .subscribe(
        (res2: Response) => {
          this.tableaudebase = res2.json();
          for (let i = 0; i < this.tableaudebase.length; i++) {
            this.listeDeFruits.push(new Fruit(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
            for (var u = 0; u < this.tableaudebase[i].acf.saison.length; u++) {
              if (this.tableaudebase[i].acf.saison[u] === this.month) {
                this.tableauTrie.push(new Fruit(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
              }
            }
          }
        }
      );
  }
  
  myFunction(value) {
    this.apiConnect.seekFruit(value);
  }
  sendColor(color: string) {
    localStorage.setItem('colorToDisplay', color.toString().slice(1));
  }
  getDate() {
    var ladate = new Date()
    ladate.getMonth() + 1
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    this.month = tab_mois[ladate.getMonth()];
    return (tab_mois[ladate.getMonth()])
  }
}
