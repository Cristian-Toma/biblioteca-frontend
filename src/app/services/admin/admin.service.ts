import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  saveMagazine(dataUser) {
    let params = JSON.stringify(dataUser);
    return this.http
      .post(`${this.endpoint}/saveMagazine`, dataUser, this.httOptions)
      .pipe(map(this.extractData));
  }

  saveUser(dataUser) {
    let params = JSON.stringify(dataUser);
    return this.http
      .post(`${this.endpoint}/saveUser`, dataUser, this.httOptions)
      .pipe(map(this.extractData));
  }

  login(dataUser) {
    let params = JSON.stringify(dataUser);
    return this.http
      .post(this.endpoint + '/login', params, this.httOptions)
      .pipe(map(this.extractData));
  }

  updateUser(dataUser) {
    let params = JSON.stringify(dataUser);

    return this.http
      .put(this.endpoint + 'updateUser/' + dataUser._id, params)
      .pipe(map(this.extractData));
  }

  deleteBook(_id: string) {
    return this.http
      .delete(`${this.endpoint}/removeBook/${_id}`, this.httOptions)
      .pipe(map(this.extractData));
  }

  deleteMagazine(_id: string) {
    return this.http
      .delete(`${this.endpoint}/removeMagazine/${_id}`, this.httOptions)
      .pipe(map(this.extractData));
  }

  deleteUser(_id: string) {
    return this.http
      .delete(`${this.endpoint}/removeUser/${_id}`, this.httOptions)
      .pipe(map(this.extractData));
  }

  modifyBook(dataBook: any) {
    return this.http
      .put(
        `${this.endpoint}/updateBook/${dataBook._id}`,
        dataBook,
        this.httOptions
      )
      .pipe(map(this.extractData));
  }

  modifyMagazine(dataMagazine: any) {
    return this.http
      .put(
        `${this.endpoint}/updateMagazine/${dataMagazine._id}`,
        dataMagazine,
        this.httOptions
      )
      .pipe(map(this.extractData));
  }

  modifyUser(dataUser: any) {
    return this.http
      .put(
        `${this.endpoint}/updateUser/${dataUser._id}`,
        dataUser,
        this.httOptions
      )
      .pipe(map(this.extractData));
  }

  getBooks() {
    return this.http
      .get(`${this.endpoint}/listBook`, this.httOptions)
      .pipe(map(this.extractData));
  }

  getMagazine() {
    return this.http
      .get(`${this.endpoint}/listMagazine`, this.httOptions)
      .pipe(map(this.extractData));
  }

  getUser() {
    return this.http
      .get(`${this.endpoint}/listUsers`, this.httOptions)
      .pipe(map(this.extractData));
  }

  isAdminLogged(): boolean {
    return (
      localStorage.getItem('token') && localStorage.getItem('user') === 'ADMIN'
    );
  }
}
