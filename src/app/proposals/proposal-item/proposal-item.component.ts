import {Component, Input} from '@angular/core';
import {ProposalDialogComponent} from "../proposal-dialog/proposal-dialog.component";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";

@Component({
  selector: 'proposal-item',
  templateUrl: './proposal-item.component.html',
  styleUrls: ['./proposal-item.component.scss']
})
export class ProposalItemComponent {
  @Input() data;

  constructor(public dialog: MdDialog) {
  }

  editProposal(data) {
    let config = new MdDialogConfig();
    let dialogRef: MdDialogRef<ProposalDialogComponent> = this.dialog.open(ProposalDialogComponent, config);
    dialogRef.componentInstance.proposal = data;
    dialogRef.componentInstance.latitude = data.latitude;
    dialogRef.componentInstance.longitude = data.longitude;
    dialogRef.componentInstance.editMode = true;
  }
}
