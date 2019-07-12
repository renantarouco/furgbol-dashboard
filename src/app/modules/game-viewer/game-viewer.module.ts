import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameViewerRoutingModule } from './game-viewer-routing.module';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { FieldCanvasComponent } from './field-canvas/field-canvas.component';
import { GameViewerComponent } from './game-viewer.component';
import { TeamInfoComponent } from './scoreboard/team-info/team-info.component';

@NgModule({
  declarations: [GameViewerComponent, ScoreboardComponent, FieldCanvasComponent, TeamInfoComponent],
  imports: [
    CommonModule,
    GameViewerRoutingModule
  ]
})
export class GameViewerModule { }
