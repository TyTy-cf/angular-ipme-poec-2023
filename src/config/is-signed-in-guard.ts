import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import jwtDecode from "jwt-decode";
import {Injectable} from "@angular/core";
import {IJwtToken} from "../model/steamish/i-jwt-token";
import {JwtTokenService} from "../service/steamish/jwt-token.service";

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

  constructor(
    private router: Router,
    private jwtTokenService: JwtTokenService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (this.jwtTokenService.getToken()) {
      return true;
    }
    return this.router.navigate(['/steamish/account/new']);
  }

}
