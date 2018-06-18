import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import{Observable} from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { authentificationService } from "../services/authentification.service";

@Injectable()
export class authGuard implements CanActivate{

    constructor(private authentification: authentificationService){
    }

    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{
            return true;
        // return this.authentification.isLoggedIn
    }
}