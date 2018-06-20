import { Component, OnInit } from '@angular/core';
import { SingleAlimentComponent } from '../single-aliment/single-aliment.component';
import { singleAliment, AlimentWithAdress, AlimentWithAdressAndType } from '../../models/singleAliment';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  listeDeFavoris: AlimentWithAdress[] = []
  listeEstVide: boolean;

  constructor(private route: Router) {

   
  }

  deleteDesFavoris(infola) {
    var data = {}
    localStorage.removeItem(infola)
    for (var i = 0; i < this.listeDeFavoris.length; i++) {
      console.log('ca arrive', this.listeDeFavoris[i])
      if (this.listeDeFavoris[i].nom === infola) {
        var index = i
        console.log('index',i)
      }
    }

    this.listeDeFavoris.splice(index, 1)
    
    if (this.listeDeFavoris.length === 0) {
      this.listeEstVide = true;
    }
  }
  ngOnInit() {
    this.listeDeFavoris = [];
    console.log(localStorage)
    if (this.listeDeFavoris.length === undefined) {
      this.listeEstVide = true;
    }

    for (var obj in localStorage) {
      console.log(typeof (obj))
      var temp = localStorage.getItem(obj)
      if (localStorage.getItem(obj) != null && localStorage.getItem(obj).length != 0 && JSON.parse(localStorage.getItem(obj)).nom != undefined) {
        let data = JSON.parse(localStorage.getItem(obj));
        this.listeEstVide = false;
        console.log("added")
        this.listeDeFavoris.push(new AlimentWithAdress(data.nom, data.image, data.adresse))
      }
    }
    console.log("mes favoris",this.listeDeFavoris)
  }

  onNavigate(data: string){
    console.log(data)
    window.location.href = data;
   }

}
