import { Component, OnInit } from '@angular/core';
import { SingleAlimentComponent } from '../single-aliment/single-aliment.component';
import { singleAliment, AlimentWithAdress } from '../../models/singleAliment';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  listeDeFavoris : AlimentWithAdress[] = []
  listeEstVide : boolean;
  constructor() {
    this.listeDeFavoris = [];
    console.log(localStorage)
    if(this.listeDeFavoris.length === 0 ){
      this.listeEstVide = true;
    }
    for(var obj in localStorage){
      var data =  JSON.parse(localStorage.getItem(obj));
      if(data != null){
        if(data.image != null){
          this.listeEstVide = false;
          this.listeDeFavoris.push(new AlimentWithAdress(data.nom,data.image,data.adresse))
          console.log('alors',data.adresse)
        }
       
      }
     
      }
      console.log('tada', this.listeDeFavoris)
    
     
     
/*
        var lol = {
          'adresse' : '.location.href',
          'image' : 'img',
          'nom' : 'nom',
          'isFavorite': 'false'
        }
        localStorage.setItem(info,JSON.stringify(lol))*/
    
      

    
  
   }

   deleteDesFavoris(infola){
    var data = {}
    var index;
    for(var i =0; i<this.listeDeFavoris.length;i++){
      if(this.listeDeFavoris[i].nom === infola){
        index = i
      }
   }
    this.listeDeFavoris.splice(index,1)
    if(this.listeDeFavoris.length === 0 ){
      this.listeEstVide = true;
    }
  }
  ngOnInit() {
  }

}
