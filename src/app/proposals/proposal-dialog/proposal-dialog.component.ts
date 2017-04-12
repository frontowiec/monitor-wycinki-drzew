import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MdDialogRef, MdSnackBar} from "@angular/material";
import {ProposalsService} from "../proposals.service";

@Component({
  selector: 'app-proposal-dialog',
  templateUrl: 'proposal-dialog.component.html',
  styleUrls: ['proposal-dialog.component.scss']
})
export class ProposalDialogComponent implements OnInit {

  isValidate: boolean = false;
  buttonName: string = 'Dalej';
  latitude: any;
  longitude: any;
  proposal: any = {};
  proposals: Array<any>;
  editMode: boolean;


  constructor(public dialogRef: MdDialogRef<ProposalDialogComponent>, public proposalsService: ProposalsService, public snackBar: MdSnackBar) {
  }

  close() {
    this.dialogRef.close();
  }

  nextStep() {
    if (this.buttonName === 'Zapisz') {
      this.proposalsService.saveProposal$(this.proposal)
        .subscribe(data => {
          if (!this.editMode) {
            this.proposals.push(data);
            this.snackBar.open(`Zapisano miejscę wycinki`, '', {
              duration: 2000,
            });
          }
        });
      this.close();
    }

    this.proposalsService.validatePosition$(this.latitude, this.longitude)
      .subscribe(data => {
        const attributes = data.features[0].attributes;
        if (attributes.allowed) {
          this.snackBar.open(`Pomyślnie zwalidowano współrzędne`, '', {
            duration: 2000,
          });

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
