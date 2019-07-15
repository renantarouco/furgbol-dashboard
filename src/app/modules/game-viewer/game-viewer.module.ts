import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameViewerRoutingModule } from './game-viewer-routing.module';
import { ScoreboardComponent } from './control-panel/scoreboard/scoreboard.component';
import { FieldCanvasComponent } from './field-canvas/field-canvas.component';
import { GameViewerComponent } from './game-viewer.component';
import { TeamsInfoComponent } from './control-panel/teams-info/teams-info.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  declarations: [GameViewerComponent, ControlPanelComponent, FieldCanvasComponent, ScoreboardComponent, TeamsInfoComponent],
  imports: [
    CommonModule,
    GameViewerRoutingModule
  ]
})
export class GameViewerModule { }
