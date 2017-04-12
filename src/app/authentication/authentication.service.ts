/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Injectable} from "@angular/core";
import {BASE_URL} from "./config";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {

  constructor(public http: Http) {
  }

  createToken$(username: string, password: string) {
    return this.http.post(`${BASE_URL}/tokens`, {username, password})
      .map(response => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  // todo: intrface tak by można było łatwo wymienić implementacje na np. cookies
  saveToken(token) {
    localStorage.setItem('token', token);
  }

  saveProfile(profile) {
    localStorage.setItem('profile', profile);
  }

  loggedIn() {
    return tokenNotExpired();
  }

  destroyToken() {
    localStorage.removeItem('token');
  }
}
