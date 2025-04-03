import Player from "../player/player";

// Singleton
export default class GameManager {
  private static _instance: GameManager;
  private _gameState: string = "ended";
  private _players: Player[] = [];

  private constructor() {} // imporant to avoid external instantation

  static getInstance() {
    if (!GameManager._instance) {
      GameManager._instance = new GameManager();
    }

    return GameManager._instance;
  }
  
  setGameState(state: string) {
    this._gameState = state;
  }

  getGameState() {
    return this._gameState;
  }

  addPlayer(player: Player) {
    this._players.push(player);
  }

  getActivePlayers(): Player[] {
    return this._players;
  }
}