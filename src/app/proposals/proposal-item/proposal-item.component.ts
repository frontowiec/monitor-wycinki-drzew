import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'proposal-item',
  templateUrl: './proposal-item.component.html',
  styleUrls: ['./proposal-item.component.scss']
})
export class ProposalItemComponent {
  @Input() data;
}
