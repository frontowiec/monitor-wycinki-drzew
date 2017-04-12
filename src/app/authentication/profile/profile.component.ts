/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Component} from "@angular/core";
import {UserService} from "../user.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  constructor(public userService: UserService) {}

  isAdmin(): boolean {
    return this.userService.getUser().isAdmin;
  }
}
