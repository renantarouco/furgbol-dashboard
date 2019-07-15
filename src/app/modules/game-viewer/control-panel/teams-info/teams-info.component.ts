import { Component, OnInit, Input } from '@angular/core';

import { TeamInfo } from '../../../../interfaces/team-info';

@Component({
  selector: 'app-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.scss']
})
export class TeamsInfoComponent implements OnInit {

  @Input() info: TeamInfo;
  @Input() color: string;
  @Input() positiveHalf: boolean;

  constructor() { }

  ngOnInit() {
  }

}
