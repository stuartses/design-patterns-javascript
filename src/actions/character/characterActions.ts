import Character from "../../character/character";

export default class CharacterActions {
  private _character: Character;

  constructor(character: Character) {
    this._character = character;
  }

  attack() {
    this._character.attack();
  }

  move() {
    this._character.move();
  }
}