import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameViewerRoutingModule } from './game-viewer-routing.module';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { FieldCanvasComponent } from './field-canvas/field-canvas.component';
import { GameViewerComponent } from './game-viewer.component';

@NgModule({
  declarations: [GameViewerComponent, ScoreboardComponent, FieldCanvasComponent],
  imports: [
    CommonModule,
    GameViewerRoutingModule
  ]
})
export class GameViewerModule { }
