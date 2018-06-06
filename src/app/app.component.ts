import { Component } from '@angular/core';
import { alimentService } from './services/aliments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[alimentService]
})
export class AppComponent {
  title = 'app';
}
