export class TeamInfo {
    name: string;
    score: number;
    redCards: number;
    yellowCardTimes?: number[];
    yellowCards: number;
    timeouts: number;
    timeoutTime: number;
    goalie?: number;
}