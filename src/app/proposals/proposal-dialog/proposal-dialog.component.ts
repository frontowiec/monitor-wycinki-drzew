import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {ProposalsService} from "../proposals.service";

@Component({
  selector: 'app-proposal-dialog',
  templateUrl: 'proposal-dialog.component.html',
  styleUrls: ['proposal-dialog.component.scss']
})
export class ProposalDialogComponent implements OnInit {

  isValidate: boolean = false;
  buttonName: string = 'Dalej';
  latitude: any = '54.408709546865806';
  longitude: any = '18.56266726984253';
  proposal:any = {};

  constructor(public dialogRef: MdDialogRef<ProposalDialogComponent>, public proposalsService: ProposalsService) {}

  close() {
    this.dialogRef.close();
  }

  nextStep() {
    if (this.buttonName === 'Zapisz') {
      this.proposalsService.saveProposal$(this.proposal)
        .subscribe(data => console.log(data));
      this.close();
    }

    this.proposalsService.validatePosition$(this.latitude, this.longitude)
      .subscribe(data => {
        const attributes = data.features[0].attributes;
        if (attributes.allowed) {
          this.isValidate = true;
          this.buttonName = 'Zapisz';
          this.proposal.latitude = this.latitude;
          this.proposal.longitude = this.longitude;
          this.proposal.precinct = `${attributes.obreb}`;
          this.proposal.parcelNumber = `${attributes.numer_dz}`;
        }
      });
  }

  ngOnInit() {
  }

}
