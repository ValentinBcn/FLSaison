import { Component, OnInit } from '@angular/core';

import { alimentService } from '../../../services/aliments.service';
import { Response } from '@angular/http';
import { Legume } from '../../../models/singleAliment';

@Component({
  selector: 'app-list-tous-legumes',
  templateUrl: './list-tous-legumes.component.html',
  styleUrls: ['./list-tous-legumes.component.css']
})
export class ListTousLegumesComponent implements OnInit {
  tableauDeBase = [];
  listdeLegumes: Legume[] = [];
  month: string;
  tableauLegumeTrie: Legume[] = [];
  arrayColor = ["#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"
    , "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"
    , "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"
    , "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd", "#ffe0e0", "#ffefdd", "#f3ffff", "#ebf2e2", "#fdfbe9", "#f9e6fd"]
  constructor(private apiConnect: alimentService) { }

  ngOnInit() {
    this.getDate();
    this.getInfosLegume();
  }

  getInfosLegume() {
    this.apiConnect.getInfoLegume().subscribe(
      (res: Response) => {
        this.tableauDeBase = res.json()
        for (let i = 0; i < this.tableauDeBase.length; i++) {
          this.listdeLegumes.push(new Legume(this.tableauDeBase[i].title.rendered, this.tableauDeBase[i].acf.photo, this.tableauDeBase[i].acf.saison))
        }
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
    this.month = tab_mois[ladate.getMonth()];
    return (tab_mois[ladate.getMonth()])
  }

  sendColor(color: string) {
    localStorage.setItem('colorToDisplay', color.toString().slice(1));
  }
}
