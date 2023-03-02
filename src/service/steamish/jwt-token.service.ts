import { Injectable } from '@angular/core';
import {IJwtToken} from "../../model/steamish/i-jwt-token";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  getToken(): IJwtToken | undefined {
    const token: string | null = localStorage.getItem('tokenJWT');
    if (token) {
      const decodedToken: IJwtToken = jwtDecode(token);
      const isExpired: boolean = Math.floor((new Date()).getTime() / 1000) > decodedToken.exp;
      if (isExpired) {
        return undefined;
      }
      return decodedToken;
    }
    return undefined;
  }

}
