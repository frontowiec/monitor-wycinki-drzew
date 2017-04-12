/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Injectable} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()
export class UserService {
  getUser(): IUser {
    return JSON.parse(localStorage.getItem('profile'));
  }
}
