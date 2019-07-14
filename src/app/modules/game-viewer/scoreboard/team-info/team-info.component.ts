import { Component, OnInit, Input } from '@angular/core';

import { TeamInfo } from '../../../../interfaces/team-info';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {

  @Input() info: TeamInfo;
  @Input() color: string;
  @Input() positiveHalf: boolean;

  constructor() { }

  ngOnInit() {
  }

}
