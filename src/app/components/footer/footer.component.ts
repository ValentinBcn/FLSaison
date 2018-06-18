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
  constructor( private router: Router, private auth: authentificationService, private data: GlobaleVariablesService) {
    
  }
  onDeconnect(){
    localStorage.removeItem('loggedIn')
    this.router.navigate(['login'])
  }
  ngOnInit() {
    
  }

  sendRequest(donnee){
    
    this.data.changeSimpleVariable(donnee)
    this.router.navigate(['research-page', donnee])

  }

}
