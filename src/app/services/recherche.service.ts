import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { alimentService } from './aliments.service';
import {Observable} from 'rxjs';
import { singleFruit } from '../models/singleFruit';

@Injectable()

export class recherche{
    nomGlobal: string;
    nomTemp: string;
    dataFruits = [];

    constructor(){
        
    }
    
    

}
