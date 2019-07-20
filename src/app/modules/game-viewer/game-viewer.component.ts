import { Component, OnInit } from '@angular/core';
import { RefereeService } from '../../providers/referee.service';
import { Observable } from 'rxjs';
import { Referee } from '../../interfaces/referee';

@Component({
  selector: 'app-game-viewer',
  templateUrl: './game-viewer.component.html',
  styleUrls: ['./game-viewer.component.scss']
})
export class GameViewerComponent implements OnInit {

  public referee$: Observable<Referee>;

  constructor(
    private refereeService: RefereeService
  ) { }

  ngOnInit() {
    this.referee$ = this.refereeService.referee$;
  }

}
