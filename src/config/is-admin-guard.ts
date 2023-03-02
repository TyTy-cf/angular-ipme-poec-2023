import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import jwtDecode from "jwt-decode";
import {Injectable} from "@angular/core";
import {IJwtToken} from "../model/steamish/i-jwt-token";
import {JwtTokenService} from "../service/steamish/jwt-token.service";

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

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
    const token: IJwtToken|undefined = this.jwtTokenService.getToken();
    if (token) {
      if (token.roles.filter((elem) => elem === 'ROLE_ADMIN').length > 0) {
        return true;
      }
    }
    return this.router.navigate(['/steamish/account/new']);
  }

}
