import { Component, OnInit, Input } from '@angular/core';

import { TeamInfo } from '../../../../interfaces/team-info';
import { ElectronService } from '../../../../providers/electron.service';

@Component({
  selector: 'app-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.scss']
})
export class TeamsInfoComponent implements OnInit {

  @Input() info: TeamInfo;
  @Input() color: string;
  @Input() positiveHalf: boolean;

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
    this.electronService.ws.subscribe(
      msg => { console.log(msg); },
      err => { console.error(err); },
      () => { console.log("completed"); }
    );
  }

}
