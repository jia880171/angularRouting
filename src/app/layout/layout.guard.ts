import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //your logic goes here
    // const canActivate = route.queryParams.name === 'Leo';
    const canActivate = route.queryParams.type === 'admin';
    if (!canActivate) {
      alert('fuck off! name: '+ route.queryParams.name);
      return false;
    }
    return true;
  }

}
