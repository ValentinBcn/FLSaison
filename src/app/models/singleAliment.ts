import { single } from "rxjs/operators";

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

export class AlimentWithAdress extends singleAliment{
    adress: string;
    constructor(_nom: string, _img:string, _adress: string){
        super(_nom,_img);
        this.adress = _adress
    }
}

export class AlimentWithAdressAndType extends singleAliment{
    adress: string
    type: string
    constructor(_nom:string,_img:string,_adress:string,_type:string){
        super(_nom,_img);
        this.adress = _adress;
        this.type = _type;
    }
}

