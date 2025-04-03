import Command from "./command/command";

export default class Actions {
  private _command: Command | null;
  
  constructor() {
    this._command = null;
  }

  setCommand(command: Command) {
    this._command = command;
  }

  pressButton() {
    this._command?.execute();
  }
}