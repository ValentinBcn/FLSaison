export class singleFruit{

    nom: string;
    imageUrl: string;
    saison : string[];
  

    constructor(_nom: string, _imageUrl: string, _saison: string[]){
        this.nom = _nom;
        this.imageUrl = _imageUrl;
        this.saison = _saison;
    
    }
}