import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule, MdButtonModule} from "@angular/material";

import {ProposalDialogComponent} from "./proposal-dialog/proposal-dialog.component";
import {ProposalItemComponent} from "./proposal-item/proposal-item.component";
import {ProposalsComponent} from "./proposals.component";
import {ProposalsService} from "./proposals.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MdButtonModule
  ],
  declarations: [
    ProposalsComponent,
    ProposalDialogComponent,
    ProposalItemComponent
  ],
  entryComponents: [
    ProposalDialogComponent
  ],
  providers: [
    ProposalsService
  ]
})
export class ProposalsModule { }
