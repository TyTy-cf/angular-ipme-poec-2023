
export interface IJwtToken {
  exp: number;
  iat: number;
  roles: string[];
  username: string;
}
