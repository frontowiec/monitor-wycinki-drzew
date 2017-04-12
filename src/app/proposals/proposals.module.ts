import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule, MdButtonModule} from "@angular/material";

import {ProposalDialogComponent} from "./proposal-dialog/proposal-dialog.component";
import {ProposalItemComponent} from "./proposal-item/proposal-item.component";
import {ProposalsComponent} from "./proposals.component";

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
})
export class ProposalsModule { }
