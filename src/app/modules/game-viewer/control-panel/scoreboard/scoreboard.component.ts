import { Component, OnInit } from '@angular/core';
import { TeamInfo } from '../../../../interfaces/team-info';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  public blueTeamOnPositiveHalf = false;
  public blueInfo: TeamInfo = {
    name: 'Blue Team',
    score: 0,
    redCards: 0,
    yellowCards: 0,
    timeouts: 0,
    timeoutTime: 1000000
  };
  public yellowInfo: TeamInfo = {
    name: 'Yellow Team',
    score: 0,
    redCards: 0,
    yellowCards: 0,
    timeouts: 0,
    timeoutTime: 1000000
  };

  constructor() { }

  ngOnInit() {
  }

}
