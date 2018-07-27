import { Component, OnInit } from '@angular/core';
import { authentificationService } from '../../services/authentification.service';
import { PersistenceService } from 'angular-persistence';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { GlobaleVariablesService } from '..//../services/globale-variables.service';
import { alimentService } from '../../services/aliments.service';

import {Observable } from 'rxjs'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  username: string
  objectRequest: string;
  favoris = [];
  isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (this.isMobile.Android() || this.isMobile.BlackBerry() || this.isMobile.iOS() || this.isMobile.Opera() || this.isMobile.Windows());
    }
};
  constructor(private route: ActivatedRoute, private router: Router, private auth: authentificationService, private data: GlobaleVariablesService, private recherche: alimentService) {
    
  }
  ngOnInit() { }

  redirectToHome(){
    this.router.navigate([''])
  }

  onDeconnect(){
    localStorage.removeItem('loggedIn')
    this.router.navigate(['login'])
  }
  
  
  sendRequest(donnee){
    /** resout le problème de recherche sur IOS (normalement) */
 
    if(this.route.snapshot['_routerState'].url === '/research-page' && this.isMobile.iOS()){
      location.reload();
    }
   
    /** */

    this.router.navigate(['research-page']).then(()=>{
     
      location.reload();
     
    });

    if(this.recherche.rechercheParmiLesAliments(donnee)!=undefined){
        this.data.globalData = this.recherche.rechercheParmiLesAliments(donnee)
      }
      localStorage.setItem('rechercheObject',JSON.stringify(this.data.globalData))
   
      
    }

  onFavoris(){
    this.favoris = [];
    for (var obj in window.localStorage){
      if(window.localStorage.getItem(obj)=== "true"){
        this.favoris.push(obj) 
      }
    }    
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  } 
}
