import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-proposal-dialog',
  templateUrl: 'proposal-dialog.component.html',
  styleUrls: ['proposal-dialog.component.scss']
})
export class ProposalDialogComponent implements OnInit {

  isValidate: boolean = false;
  buttonName: string = 'Dalej';

  constructor(public dialogRef: MdDialogRef<ProposalDialogComponent>) {}

  close() {
    this.dialogRef.close();
  }

  nextStep() {
    if (this.buttonName === 'Zapisz') {
      this.close();
    }

    this.isValidate = true;
    this.buttonName = 'Zapisz';
  }

  ngOnInit() {
  }

}
