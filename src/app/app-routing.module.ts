/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProposalsComponent} from "./proposals/proposals.component";
import {ProfileComponent} from "./authentication/profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: '/proposals', pathMatch: 'full'},
  {path: 'proposals', component: ProposalsComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}