import {Injectable} from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild, CanActivate {

  private helper: JwtHelperService;

  constructor(private auth: AuthService, private router: Router) {
    this.helper = new JwtHelperService();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.token && !this.helper.isTokenExpired(this.auth.token)) {
      return true;
    }
    return this.router.parseUrl('/auth/login');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.token && !this.helper.isTokenExpired(this.auth.token)) {
      return true;
    }
    return this.router.parseUrl('/auth/login');
  }
}
