import { Component } from '@angular/core';
import { alimentService } from './services/aliments.service';
import { recherche } from './services/recherche.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[alimentService, recherche]
})
export class AppComponent {
  title = 'app';
}
