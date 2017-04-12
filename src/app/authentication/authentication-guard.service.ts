/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationGuardService {

  constructor(private authentication: AuthenticationService, private router: Router) {}

  canActivate() {
    if(this.authentication.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['unauthorized']);
      return false;
    }
  }
}
