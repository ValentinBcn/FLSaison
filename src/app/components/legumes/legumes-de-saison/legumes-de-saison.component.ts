import { Component, OnInit } from '@angular/core';
import { alimentService } from '../../../services/aliments.service';
import { Response } from '@angular/http';
import { Legume } from '../../../models/singleAliment';

@Component({
  selector: 'app-legumes-de-saison',
  templateUrl: './legumes-de-saison.component.html',
  styleUrls: ['./legumes-de-saison.component.css']
})
export class legumesDeSaisonComponent implements OnInit {


  listeDelegumes: Legume[] = [];
  tableaudebase = [];
  tableauTrie: Legume[] = [];
  month: string;
  arrayColor = ["#ffe0e0","#ffefdd","#f3ffff","#ebf2e2","#fdfbe9","#f9e6fd","#ffe0e0","#ffefdd","#f3ffff","#ebf2e2","#fdfbe9","#f9e6fd"
  ,"#ffe0e0","#ffefdd","#f3ffff","#ebf2e2","#fdfbe9","#f9e6fd", "#ffe0e0","#ffefdd","#f3ffff","#ebf2e2","#fdfbe9","#f9e6fd"]
  constructor(private apiConnect: alimentService) {}

  ngOnInit() {
    this.getDate();
    this.onGetlegumes();
  }

  onGetlegumes() {
    this.apiConnect.getInfoLegume()
      .subscribe(
        (res2: Response) => {
          this.tableaudebase = res2.json();
          for (let i = 0; i < this.tableaudebase.length; i++) {
            this.listeDelegumes.push(new Legume(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
            for (var u = 0; u < this.tableaudebase[i].acf.saison.length; u++) {
              if (this.tableaudebase[i].acf.saison[u] === this.month) {
                this.tableauTrie.push(new Legume(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
              }
            }
          }
        }
      );
  }
  
  myFunction(value) {
    this.apiConnect.seekLegume(value);
  }

  getDate() {
    var ladate = new Date()
    ladate.getMonth() + 1
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    this.month = tab_mois[ladate.getMonth()];
    return (tab_mois[ladate.getMonth()])
  }
}
