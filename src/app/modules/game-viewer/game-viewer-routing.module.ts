import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameViewerComponent } from './game-viewer.component';

const routes: Routes = [
    {
        path: '',
        component: GameViewerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameViewerRoutingModule { }
