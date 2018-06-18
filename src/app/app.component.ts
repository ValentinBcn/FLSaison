import { Component, OnInit } from '@angular/core';
import { alimentService } from './services/aliments.service';
import { authentificationService } from './services/authentification.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {}

  ngOnInit() {

  }
  
}
