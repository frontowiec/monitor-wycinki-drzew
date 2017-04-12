import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {Http, RequestOptions} from "@angular/http";
import {AuthHttp, AuthConfig} from "angular2-jwt";
import {AuthenticationService} from "./authentication.service";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";
import {AuthenticationGuardService} from "./authentication-guard.service";
import {UserService} from "./user.service";
import {FormsModule} from "@angular/forms";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: ' ',
    headerName: 'X-AUTH-TOKEN',
  }), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthenticationService,
    AuthenticationGuardService,
    UserService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent,
    UnauthorizedComponent
  ]
})
export class AuthenticationModule {
}
