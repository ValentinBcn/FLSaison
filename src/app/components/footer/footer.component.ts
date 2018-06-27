import { Component, OnInit } from '@angular/core';
import { authentificationService } from '../../services/authentification.service';
import { PersistenceService } from 'angular-persistence';
import { Router, ActivatedRoute } from '@angular/router';
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
  
  constructor(private route: ActivatedRoute, private router: Router, private auth: authentificationService, private data: GlobaleVariablesService, private recherche: alimentService) {
    
  }
  redirectToHome(){
    this.router.navigate([''])
  }

  onDeconnect(){
    localStorage.removeItem('loggedIn')
    this.router.navigate(['login'])
  }
  
  
  sendRequest(donnee){

  if(this.route.snapshot['_routerState'].url === '/research-page'){
     location.reload()
    }
    var myObservable = Observable.of(donnee)
    
    myObservable.subscribe(res => {
      if(this.recherche.rechercheParmiLesAliments(res)!=undefined){
        this.data.globalData = this.recherche.rechercheParmiLesAliments(res)
 
      }
      localStorage.setItem('rechercheObject',JSON.stringify(this.data.globalData))
    })
    this.router.navigate(['research-page'])
   
    this.data.changeSimpleVariable(donnee)
  

  }

  onFavoris(){
    this.favoris = [];
    for (var obj in window.localStorage){
      if(window.localStorage.getItem(obj)=== "true")
      this.favoris.push(obj)  
      console.log('cest',this.favoris)
    }

    
  }
  ngOnInit() {
   
    
  }
  myFunction() {
    console.log('my function')
    document.getElementById("myDropdown").classList.toggle("show");
  }


// Close the dropdown menu if the user clicks outside of it

  


  
}
