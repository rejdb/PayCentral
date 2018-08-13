import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tokenNotExpired } from 'angular2-jwt';
// import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';

@Injectable()
export class AuthService {
  api_endpoints: any;
  authToken: any;
  user: any;
  url_register = '/api/users/register';
  url_login = '/api/users/authenticate';
  url_profile = '/api/users/profile';

  constructor(
    private _http:HttpClient
  ) { 
    this.api_endpoints = 'http://localhost:8080';
    // this.api_endpoints = '';
  }

  _post(url, data): any {
    // this.loadToken();
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer ' + this.authToken);
    return this._http.post(this.api_endpoints + url, data);
  }

  _get(url): any {
    // this.loadToken();
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer ' + this.authToken);
    // console.log(this.authToken);
    return this._http.get<any>(this.api_endpoints + url);
  }

  registerUser(user) {
    let url = this.api_endpoints + this.url_register;
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    return this._http.post<any>(url, user);//.map(res => res.json());
  }

  authenticate(user) {
    let url = this.api_endpoints + this.url_login;
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    return this._http.post<any>(url, user);//.map(res => res.json());
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
