import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {Http, RequestOptions} from "@angular/http";
import {AuthHttp, AuthConfig} from "angular2-jwt";
import {AuthenticationService} from "./authentication.service";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthenticationService
  ],
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
