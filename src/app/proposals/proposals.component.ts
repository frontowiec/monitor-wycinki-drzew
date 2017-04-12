/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import { Component } from '@angular/core';
import {MdDialog} from "@angular/material";
import {ProposalDialogComponent} from "./proposal-dialog/proposal-dialog.component";
import {ProposalsService} from "./proposals.service";

@Component({
  selector: 'proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
  proposals;

  constructor(public dialog: MdDialog, public proposalsService: ProposalsService) {}

  ngOnInit() {

    // this.proposalsService.validatePosition$();

    this.proposalsService.getAllProposals$()
      .subscribe(proposals => this.proposals = proposals.content);
  }

  addProposal(): void {
    this.dialog.open(ProposalDialogComponent, {
      disableClose: true
    });
  }
}
