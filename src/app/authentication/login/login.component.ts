/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {AuthenticationService} from "../authentication.service";
import {IUser} from "../user.model";
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(public http: Http, public authenticationService: AuthenticationService, public router: Router) {
  }

  login(username: string, password: string) {
    this.authenticationService.createToken$(username, password)
      .subscribe((user: IUser) => {
        const profile = {email: user.email, isAdmin: user.isAdmin, lastName: user.lastName, name: user.name, username: user.username};
        this.authenticationService.saveToken(user.token);
        this.authenticationService.saveProfile(JSON.stringify(profile));
        this.router.navigateByUrl('');
      });
  }
}
