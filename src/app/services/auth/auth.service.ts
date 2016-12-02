import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import 'rxjs/Rx'
import { ApiService } from "../api/api.service";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AuthService implements CanActivate{

  JWT_KEY: string = 'keep_token';
  JWT: string = 'dgsdgdfsgds';

  constructor(private router: Router, private apiService: ApiService) {
    const token = window.localStorage.getItem(this.JWT_KEY);

    if(token) {
      this.setJWT(token);
    }

  }

  setJWT(jwt: string) {
    window.localStorage.setItem(this.JWT_KEY, jwt);
    this.apiService.setHeaders({ Authorization: `Bearer ${jwt}`});
  }

  isAuthorized(): boolean{
    return Boolean(this.JWT);
  }

  canActivate(): boolean {
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);
    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
    if(!canActivate){
      this.router.navigate(['','auth'])
    }
  }

}
