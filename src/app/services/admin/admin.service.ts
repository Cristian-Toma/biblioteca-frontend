import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  endpoint = 'http://localhost:3800/admin';
  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || [] || {};
  }

  saveBook(dataUser) {
    let params = JSON.stringify(dataUser);
    return this.http
      .post(`${this.endpoint}/saveBook`, dataUser, this.httOptions)
      .pipe(map(this.extractData));
  }

  saveUser(dataUser) {
    let params = JSON.stringify(dataUser);
    return this.http
      .post(`${this.endpoint}/'saveUser`, this.httOptions, this.httOptions)
      .pipe(map(this.extractData));
  }

  login(dataUser) {
    let params = JSON.stringify(dataUser);
    return this.http
      .post(this.endpoint + 'login', params, this.httOptions)
      .pipe(map(this.extractData));
  }

  updateUser(dataUser) {
    let params = JSON.stringify(dataUser);

    return this.http
      .put(this.endpoint + 'updateUser/' + dataUser._id, params)
      .pipe(map(this.extractData));
  }

  deleteBook(dataBook: any) {
    return this.http
      .delete(`${this.endpoint}/removeBook/${dataBook._id}`, this.httOptions)
      .pipe(map(this.extractData));
  }

  modifyBook(dataBook: any) {
    return this.http
      .post(`${this.endpoint}/updateBook/:id${dataBook._id}`, this.httOptions)
      .pipe(map(this.extractData));
  }

  getBooks() {
    return this.http
      .get(`${this.endpoint}/listBook`, this.httOptions)
      .pipe(map(this.extractData));
  }

  isAdminLogged(): boolean {
    return (
      localStorage.getItem('token') && localStorage.getItem('user') === 'ADMIN'
    );
  }
}
