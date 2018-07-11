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


  constructor(private route: Router) {}

  deleteDesFavoris(infola) {
    var data = {}
    localStorage.removeItem(infola)
    for (var i = 0; i < this.listeDeFavoris.length; i++) {
      if (this.listeDeFavoris[i].nom === infola) {
        var index = i
      }
    }

    this.listeDeFavoris.splice(index, 1)

  }
  ngOnInit() {
  localStorage.removeItem('rechercheObject')
    this.listeDeFavoris = [];
     for (var obj in localStorage) {
     
      if( obj != "colorToDisplay" && obj!="onesignal-notification-prompt" &&
      JSON.parse(localStorage.getItem(obj)) != null){
        let data = JSON.parse(localStorage.getItem(obj))
        this.listeDeFavoris.push(new AlimentWithAdress(data.nom, data.image, data.adresse))
        console.log("data",data)
      }
    }
}

  onNavigate(data: string){
    window.location.href = data;
   }

}
