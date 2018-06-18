export class singleAliment{
    nom: string;
    imageUrl: string;

    constructor(_nom: string, _imageUrl: string){
        this.nom = _nom;
        this.imageUrl = _imageUrl;
    }
}

export class Fruit extends singleAliment{

    saison: string[];

    constructor(_nom: string, _imageUrl: string, _saison: string[]){
        super(_nom,_imageUrl);
        this.saison = _saison;
    }
}

export class Legume extends singleAliment{
    
    saison: string[];

    constructor(_nom: string, _imageUrl: string, _saison: string[]){
        super(_nom,_imageUrl);
        this.saison = _saison;
    }
}


