import { Pipe, PipeTransform } from '@angular/core';
import { Fruit, singleAliment } from './models/singleAliment';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(aliments:  Fruit[], filterstring: string): any {
 
    if(!aliments || !filterstring){
      console.log("c'est video")
      return aliments
    }
   /* return value.filter((fruit)=>{
      return fruit.nom.toLowerCase().includes(value.toLowerCase());
    })*/
  const tempArray=[];
   for(var elmt of aliments){
     for(var i=0; i<elmt.saison.length;i++){
      if(filterstring === elmt.saison[i]){
        console.log('elmt', elmt.nom)
        tempArray.push(elmt)
        
       }
     } 
     
   }
   console.log('fin',tempArray)
   return tempArray
  
  }

}
