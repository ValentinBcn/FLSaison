import { Component, OnInit } from '@angular/core';
import { singleLegume } from '../../../models/singleLegume';
import { alimentService } from '../../../services/aliments.service';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-list-legumes-trie',
  templateUrl: './list-legumes.component.html',
  styleUrls: ['./list-legumes.component.css']
})
export class ListLegumesTrieComponent implements OnInit {

  tableauDeBase = [];
  listdeLegumes: singleLegume[] = [];
  month: string;
  tableauLegumeTrie: singleLegume[] = [];
  nombreDeLegumes = 2;
  constructor(private apiConnect: alimentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDate();
    this.getInfosLegume();
  }

  getInfosLegume() {
    this.apiConnect.getInfoLegume().subscribe(
      (res: Response) => {
        this.tableauDeBase = res.json()
        for (let i = 0; i < this.tableauDeBase.length; i++) {
          this.listdeLegumes.push(new singleLegume(this.tableauDeBase[i].title.rendered, this.tableauDeBase[i].acf.photo, this.tableauDeBase[i].acf.saison))
          for (var u = 0; u < this.tableauDeBase[i].acf.saison.length; u++) {
            if (this.tableauDeBase[i].acf.saison[u] === this.month) {
              this.tableauLegumeTrie.push(new singleLegume(this.tableauDeBase[i].title.rendered, this.tableauDeBase[i].acf.photo, this.tableauDeBase[i].acf.saison))
              console.log("un de plus");
            }
          }
        }
        this.shuffleArray(this.tableauLegumeTrie)
      }
    )
  }



  myFunction(value) {
    this.apiConnect.seekLegume(value);
  }


  getDate() {
    var ladate = new Date()
    ladate.getMonth() + 1
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    console.log("mois actuel", tab_mois[ladate.getMonth()]);
    this.month = tab_mois[ladate.getMonth()];
    return (tab_mois[ladate.getMonth()])
  }


  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

}
