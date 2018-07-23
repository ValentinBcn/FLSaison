import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((e: NavigationStart) => {
        if (e.url.indexOf('/fruits') > -1) {
          //si dans e.url il y a le string /fruits alors on procède
          $('.square1').css('background-color', '#fff');
          $('.square1').css('color', '#F7931E');
          $('.square1').css('background-image', 'url("../../../assets/homeIcon-orange.png")');

          $('.square3').css('background-color', '#fff');
          $('.square3').css('color', '#F7931E');
          $('.square3').css('background-image', 'url("../../../assets/LegumePage-orange.png")');

          $('.square4').css('background-color', '#fff');
          $('.square4').css('color', '#F7931E');
          $('.square4').css('background-image', 'url("../../../assets/iconeFavoris-orange.png")');

          $('.square2').css('background-color', '#F7931E');
          $('.square2').css('color', '#fff');
          $('.square2').css('background-image', 'url("../../../assets/fruitPage.png")');

        }

        else if (e.url.indexOf('/research-page') > -1) {
          $('.square1').css('background-color', '#fff');
          $('.square1').css('color', '#F7931E');
          $('.square1').css('background-image', 'url("../../../assets/homeIcon-orange.png")');

          $('.square2').css('background-color', '#fff');
          $('.square2').css('color', '#F7931E');
          $('.square2').css('background-image', 'url("../../../assets/fruitPage-orange.png")');

          $('.square3').css('background-color', '#fff');
          $('.square3').css('color', '#F7931E');
          $('.square3').css('background-image', 'url("../../../assets/LegumePage-orange.png")');

          $('.square4').css('background-color', '#fff');
          $('.square4').css('color', '#F7931E');
          $('.square4').css('background-image', 'url("../../../assets/iconeFavoris-orange.png")');
        }


        else if (e.url.indexOf('/legumes') > -1) {
          $('.square1').css('background-color', '#fff');
          $('.square1').css('color', '#F7931E');
          $('.square1').css('background-image', 'url("../../../assets/homeIcon-orange.png")');

          $('.square3').css('background-color', '#F7931E');
          $('.square3').css('color', '#fff');
          $('.square3').css('background-image', 'url("../../../assets/LegumePage.png")');

          $('.square4').css('background-color', '#fff');
          $('.square4').css('color', '#F7931E');
          $('.square4').css('background-image', 'url("../../../assets/iconeFavoris-orange.png")');

          $('.square2').css('background-color', '#fff');
          $('.square2').css('color', '#F7931E');
          $('.square2').css('background-image', 'url("../../../assets/fruitPage-orange.png")');
        }


        else if (e.url === '/') {
          $('.square1').css('background-color', '#F7931E');
          $('.square1').css('color', '#fff');
          $('.square1').css('background-image', 'url("../../../assets/homeIcon.png")');

          $('.square3').css('background-color', '#fff');
          $('.square3').css('color', '#F7931E');
          $('.square3').css('background-image', 'url("../../../assets/LegumePage-orange.png")');

          $('.square4').css('background-color', '#fff');
          $('.square4').css('color', '#F7931E');
          $('.square4').css('background-image', 'url("../../../assets/iconeFavoris-orange.png")');

          $('.square2').css('background-color', '#fff');
          $('.square2').css('color', '#F7931E');
          $('.square2').css('background-image', 'url("../../../assets/fruitPage-orange.png")');
        }

        else if (e.url === '/mes-favoris') {
          $('.square1').css('background-color', '#fff');
          $('.square1').css('color', '#F7931E');
          $('.square1').css('background-image', 'url("../../../assets/homeIcon-orange.png")');

          $('.square3').css('background-color', '#fff');
          $('.square3').css('color', '#F7931E');
          $('.square3').css('background-image', 'url("../../../assets/LegumePage-orange.png")');

          $('.square4').css('background-color', '#F7931E');
          $('.square4').css('color', '#fff');
          $('.square4').css('background-image', 'url("../../../assets/iconeFavoris.png")');

          $('.square2').css('background-color', '#fff');
          $('.square2').css('color', '#F7931E');
          $('.square2').css('background-image', 'url("../../../assets/fruitPage-orange.png")');
        }
      })
  }

  ngOnInit() { }
}
