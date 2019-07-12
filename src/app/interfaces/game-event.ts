export class GameEvent {
    gameEventType: number;
    originator: { team: number; botId: number; };
    message: string;
}