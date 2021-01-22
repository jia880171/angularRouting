import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {
  constructor (private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //your logic goes here
    // const canActivate = route.queryParams.name === 'Leo';
    const canActivate = route.queryParams.type === 'admin';
    if (!canActivate) {
      alert('fuck off! name: '+ route.queryParams.name);
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

}
