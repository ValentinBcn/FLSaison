import { Component, OnInit } from '@angular/core';
import { authentificationService } from '../../services/authentification.service';
import { PersistenceService } from 'angular-persistence';
import { Router } from '@angular/router';
import { GlobaleVariablesService } from '..//../services/globale-variables.service';
import { alimentService } from '../../services/aliments.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  username: string
  objectRequest: string;
  favoris = [];
  constructor( private router: Router, private auth: authentificationService, private data: GlobaleVariablesService) {
    
  }
  onDeconnect(){
    localStorage.removeItem('loggedIn')
    this.router.navigate(['login'])
  }
  

  sendRequest(donnee){
    
    this.data.changeSimpleVariable(donnee)
    this.router.navigate(['research-page', donnee])

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
