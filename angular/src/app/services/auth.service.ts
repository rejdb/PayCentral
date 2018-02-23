import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  api_endpoints: any;
  authToken: any;
  user: any;
  url_register = '/api/users/register';
  url_login = '/api/users/authenticate';
  url_profile = '/api/users/profile';

  constructor(
    private _http:Http
  ) { 
    // this.api_endpoints = 'http://localhost:3001';
    this.api_endpoints = '';
  }

  _post(url, data) {
    this.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.authToken);
    return this._http.post(this.api_endpoints + url, data, {headers: headers}).map(res => res.json());
  }

  _get(url) {
    this.loadToken();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.authToken);
    return this._http.get(this.api_endpoints + url, {headers: headers}).map(res => res.json());
  }

  registerUser(user) {
    let url = this.api_endpoints + this.url_register;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, user, {headers: headers}).map(res => res.json());
  }

  authenticate(user) {
    let url = this.api_endpoints + this.url_login;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(url, user, {headers: headers}).map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    this.authToken = localStorage.getItem('token');
  }

  getuser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
