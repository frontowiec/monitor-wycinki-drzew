/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import {ProposalDialogComponent} from "./proposal-dialog/proposal-dialog.component";
import {ProposalsService} from "./proposals.service";

@Component({
  selector: 'proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  proposals: Array<any> = [];

  constructor(public dialog: MdDialog, public proposalsService: ProposalsService) {
  }

  ngOnInit() {
    this.proposalsService.getAllProposals$()
      .subscribe(proposals => this.proposals = proposals.content);
  }

  addProposal(): void {
    let config = new MdDialogConfig();
    let dialogRef: MdDialogRef<ProposalDialogComponent> = this.dialog.open(ProposalDialogComponent, config);
    dialogRef.componentInstance.proposals = this.proposals;
  }
}
