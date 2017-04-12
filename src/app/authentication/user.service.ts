/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {Observable} from "rxjs";
import {AuthHttp} from "angular2-jwt";
import {BASE_URL} from "./config";
import {Headers, RequestOptions} from "@angular/http";

@Injectable()
export class UserService {

  constructor(public http: AuthHttp) {
  }

  getUser(): IUser {
    return JSON.parse(localStorage.getItem('profile'));
  }

  getAllUsers$(): Observable<IUser[]> {
    return this.http.get(`${BASE_URL}/accounts`)
      .map(response => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
