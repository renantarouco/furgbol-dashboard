import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Referee } from '../../../interfaces/referee';
import { TeamInfo } from '../../../interfaces/team-info';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  @Input() refereeStream: Observable<Referee>;

  public blueInfo: TeamInfo;
  public yellowInfo: TeamInfo;

  constructor() { }

  ngOnInit() {
    this.refereeStream.subscribe(
      (referee: Referee) => {
        this.blueInfo = referee.blueInfo;
        this.yellowInfo = referee.yellowInfo;
      }
    );
  }

}
