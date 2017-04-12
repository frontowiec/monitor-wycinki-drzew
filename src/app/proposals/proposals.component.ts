/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import { Component } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ProposalDialogComponent} from "./proposal-dialog/proposal-dialog.component";

@Component({
  selector: 'proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {

  constructor(public dialog: MdDialog) {}

  addProposal(): void {
    this.dialog.open(ProposalDialogComponent, {
      disableClose: true
    });
  }
}
