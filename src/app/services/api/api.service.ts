import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  headers: Headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  api_url: string = 'http://localhost:3500';

  constructor(private http: Http) { }

  private getJson(res: Response){
    return res.json();
  }

  private errorHandler(res: Response): Response{
    if(res.status >= 200 && res.status < 300) {
      return res;
    } else {
      const error = new Error(res.statusText);
      error['response'] = res;
      console.log(error);
      throw error;
    }
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, {headers: this.headers})
      .map(this.errorHandler)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }

  post(path: string, body): Observable<any> {
    return this.http.post(`${this.api_url}${path}`, JSON.stringify(body),{headers: this.headers})
      .map(this.errorHandler)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }


  delete(path: string): Observable<any> {
    return this.http.delete(`${this.api_url}${path}`, {headers: this.headers})
      .map(this.errorHandler)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }


}
