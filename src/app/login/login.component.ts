import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { authentificationService } from '../services/authentification.service';
import { PersistenceService } from 'angular-persistence';
import { Response } from '@angular/http';
import { authGuard } from '../services/authGuard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})

@Injectable()
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authentification: authentificationService, private persistent: PersistenceService, private guard: authGuard) { }

  ngOnInit() {
    //this.authentification.display('hello');
  }
  



  myFunction(a: string,b: string){
    this.authentification.sendRequest(a,b).subscribe(res => {
      console.log(res);
      
      this.authentification.changeLogIn(true);
      this.router.navigate(['fruits']);
     
    
      console.log("le token est = ", this.authentification.isLoggedIn);
      
    },

    err => {
      localStorage.removeItem('loggedIn')
      alert("mauvais identifiants");
      this.router.navigate(['login']);
      console.log("Error occured");
    });
    
  }




}
