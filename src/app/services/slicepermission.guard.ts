import { observable } from 'rxjs/symbol/observable';
import { AuthService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SlicepermissionGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      
      return this.authService.getUser()
      .switchMap(user => this.authService.checkMailBoxPermissions(user.uid)
        .then((res)=>{
        if(res.json()){
          return true;
        }
        else{
          this.router.navigate(['/login/permission-denied'])
          return false;
        }
      }))
       
  }

  // canActivateChild(childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> {
  //   return this.canActivate(childRoute, state);
  // }

  
}
