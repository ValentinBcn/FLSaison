import { Component, OnInit } from '@angular/core';
import { singleAliment, Fruit } from '../../models/singleAliment';
import { alimentService } from '../../services/aliments.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {
  listeDeFruits: Fruit[] = [];
  tableaudebase = [];
  laSaisonChoisie = "Mars";
  constructor(private apiConnect: alimentService) {
  }

  onJanvier(){
    this.laSaisonChoisie = "Janvier";
  }

  onFevrier(){
    this.laSaisonChoisie = "Février"
  }

  onMars(){
    this.laSaisonChoisie = "Mars"
  }

  onAvril(){
    this.laSaisonChoisie = "Avril"
  }

  ngOnInit() { 
    this.onGetFruits()
  }
  onGetFruits() {
    this.apiConnect.getInfoFruit()
      .subscribe(
        (res2: Response) => {
          this.tableaudebase = res2.json();
          for (let i = 0; i < this.tableaudebase.length; i++) {
            this.listeDeFruits.push(new Fruit(this.tableaudebase[i].title.rendered, this.tableaudebase[i].acf.photo, this.tableaudebase[i].acf.saison))
          }
        }
      );
  }
 
}
