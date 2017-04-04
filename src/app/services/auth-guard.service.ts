import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.auth.isLoggedIn();
    }

  constructor(private auth: AuthService,private router: Router) { }
  
    canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> 
     {
       return this.auth.isLoggedIn();
     }



}
