import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint = 'http://localhost:3800/user';
  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || [] || {};
  }
  isUserLogged(): boolean {
    return (
      localStorage.getItem('token') && localStorage.getItem('user') === 'USER'
    );
  }

  getMagazine() {
    return this.http
      .get(`${this.endpoint}/listMagazine`, this.httOptions)
      .pipe(map(this.extractData));
  }

  getBooks() {
    return this.http
      .get(`${this.endpoint}/listBook`, this.httOptions)
      .pipe(map(this.extractData));
  }
}
