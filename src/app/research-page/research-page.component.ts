import { Component, OnInit } from '@angular/core';
import { GlobaleVariablesService } from '../services/globale-variables.service';
import { Fruit, singleAliment } from '../models/singleAliment';
import { alimentService } from '../services/aliments.service';
import { Response } from '@angular/http';
import { ActivatedRoute, Route, Router, NavigationEnd, ActivationEnd, ActivationStart } from '@angular/router';
import { SingleAlimentComponent } from '../components/single-aliment/single-aliment.component';

@Component({
  selector: 'research-favorite-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.css']
})
export class ResearchPageComponent implements OnInit {
  listeDeAliments: singleAliment[] = [];
  listeDeFruitsTrie: Fruit[] = [];
  tableaudebase = [];
  private data: string;
  info: string;
  info2: string;
  constructor(private donnee: GlobaleVariablesService,private apiConnect: alimentService , private route: ActivatedRoute,private router: Router) { 
    
    this.info2 = this.route.snapshot.params['alimentname'];
    console.log(this.info2)
    console.log(this.apiConnect.seekAliment('Fraise'))
    this.listeDeAliments.push(new singleAliment(this.apiConnect.seekAliment(this.info2)[0],this.apiConnect.seekAliment(this.info2)[1]));     
   
   
  }

  ngOnInit() {
    
 
    this.router.events.subscribe(data =>{
      if (data instanceof ActivationStart){
       console.log(this.donnee.avoirVariable)
     
          this.listeDeAliments =  [];
         
           console.log('resultat',this.apiConnect.seekAliment(this.donnee.avoirVariable)[1]);
           this.listeDeAliments.push(new singleAliment(this.apiConnect.seekAliment(this.donnee.avoirVariable)[0],this.apiConnect.seekAliment(this.donnee.avoirVariable)[1]));
         console.log("et là", this.listeDeAliments)
       }
    })
  }

  }


   
  


