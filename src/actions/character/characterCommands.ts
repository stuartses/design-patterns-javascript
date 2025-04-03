import Command from "../command/command";
import characterActions from "./characterActions";

export class AttackCommand implements Command {
  private _action: characterActions;

  constructor(action: characterActions) {
    this._action = action;
  }

  execute(): void {
    this._action.attack();
  }
}

export class MoveCommand implements Command {
  private _action: characterActions;

  constructor(action: characterActions) {
    this._action = action;
  }

  execute(): void {
    this._action.move();
  }
}