import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})
export class AuthenticationModule {
}
