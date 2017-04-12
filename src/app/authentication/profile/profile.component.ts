/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../user.service";
import {IUser} from "../user.model";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{
  user: IUser = this.userService.getUser();
  users: IUser[] = [];
  userToEdit = Object.assign({}, this.user);
  selectetTabIndex: number = 0;

  constructor(public userService: UserService, public snackBar: MdSnackBar) {}

  ngOnInit(): void {
    this.userService.getAllUsers$()
      .subscribe((users: any) => {
        this.users = users.content;
      });
  }

  createAccount(profile) {
    this.userService.createAccount$(profile)
      .subscribe(account => {
        this.snackBar.open(`Wysłano mail aktywacyjny na adres ${account.email}`, '', {
          duration: 2000,
        });
      })
  }

  editUser(user: IUser) {
    this.userToEdit = user;
    this.selectetTabIndex = 0;
  }

  updateUser() {
    this.userService.update$(this.userToEdit)
      .subscribe(user => {
        this.snackBar.open(`Pomyślnie aktualizowano dane użytkownika ${user.username}`, '', {
          duration: 2000,
        });
      })
  }
}
