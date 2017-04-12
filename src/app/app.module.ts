import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule, MdButtonModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import 'hammerjs';
import {AppRoutingModule} from "./app-routing.module";
import {ProposalsModule} from "./proposals/proposals.module";
import {AuthenticationModule} from "./authentication/authentication.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    MdButtonModule,
    ProposalsModule,
    AuthenticationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
