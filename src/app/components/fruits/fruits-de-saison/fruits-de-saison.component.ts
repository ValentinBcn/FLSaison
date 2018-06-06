import { Component, OnInit } from '@angular/core';
import { alimentService } from '../../../services/aliments.service';
import { singleFruit } from '../../../models/singleFruit';
import { Response } from '@angular/http';

@Component({
  selector: 'app-fruits-de-saison',
  templateUrl: './fruits-de-saison.component.html',
  styleUrls: ['./fruits-de-saison.component.css']
})
export class FruitsDeSaisonComponent implements OnInit {


  listeDeFruits: singleFruit[] = [];
  tableaudebase = [];
  tableauTrie: singleFruit[] = [];
  month: string;

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
            this.listeDeFruits.push(new singleFruit(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
            for (var u = 0; u < this.tableaudebase[i].acf.saison.length; u++) {
              if (this.tableaudebase[i].acf.saison[u] === this.month) {
                this.tableauTrie.push(new singleFruit(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
              }
            }
          }
        }
      );
  }

  myFunction(value) {
    this.apiConnect.seekFruit(value);
  }

  getDate() {
    var ladate = new Date()
    ladate.getMonth() + 1
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    this.month = tab_mois[ladate.getMonth()];
    return (tab_mois[ladate.getMonth()])
  }

}
