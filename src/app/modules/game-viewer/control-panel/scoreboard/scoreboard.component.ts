import { Component, OnInit, Input } from '@angular/core';
import { TeamInfo } from '../../../../interfaces/team-info';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  @Input() blueName: string;
  @Input() blueScore: number;
  @Input() yellowName: string;
  @Input() yellowScore: number;
  

  constructor() { }

  ngOnInit() {
  }

}
