import { TeamInfo } from './team-info';
import { GameEvent } from './game-event';

export class Referee {
    timestamp: number;
    stage: number;
    stageTimeLeft: number;
    command: number;
    commandCounter: number;
    commandTimestamp: number;
    blueInfo: TeamInfo;
    yellowInfo: TeamInfo;
    designatedPosition: { x: number; y: number; };
    blueTeamOnPositiveHalf: boolean;
    gameEvent: GameEvent;
}