/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../user.service";
import {IUser} from "../user.model";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{
  user: IUser = this.userService.getUser();
  users: IUser[] = [];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers$()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }
}
