import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService, private router: Router) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // this.auth.isAuthenticated.subscribe((res : boolean)=>{
    //   if (res){
    //     return true;
    //   }
    //   else{
    //     this.router.navigate(['/login']);
    //     return false;
    //   }
    // })

    return this.auth.isAuth()
      .then((res) => {
        if (res) {
          return true;
        }
        else {
          this.router.navigate(['/login']);
          return false;
        }
      })
  }



}
