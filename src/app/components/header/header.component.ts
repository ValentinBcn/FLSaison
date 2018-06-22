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
      if ( e.url.indexOf( '/fruits' ) > -1 ) {
        //si dans e.url il y a le string /fruits alors on procède
        $('.square1').css('visibility','hidden');
        $('.square1').css('display','');
        $('.square3').css('visibility','hidden');
        $('.square3').css('display','');
        $('.square2').css('visibility','');
        $('.square2').css('display','block');
      } 
      
      else if(e.url.indexOf('/research-page') > -1){
        $('.square3').css('visibility','hidden');
        $('.square3').css('display','');
        $('.square2').css('visibility','hidden');
        $('.square2').css('display','');
        $('.square1').css('visibility','hidden');
        $('.square1').css('display','');
     }


      else if(e.url.indexOf('/legumes') > -1){
         $('.square3').css('visibility','');
         $('.square3').css('display','block');
         $('.square2').css('visibility','hidden');
         $('.square2').css('display','');
         $('.square1').css('visibility','hidden');
         $('.square1').css('display','');
      }


      else if(e.url === '/'){
        $('.square1').css('visibility','');
        $('.square1').css('display','block');
        $('.square2').css('visibility','hidden');
        $('.square2').css('display','');
        $('.square3').css('visibility','hidden');
        $('.square3').css('display','');
      }
  })}
    
  ngOnInit() {}

}
