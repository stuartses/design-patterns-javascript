import Character from "../character";
import { IWarriorParams } from "./warrior.type";
import { ARMOR_INIT } from "../constants";

export default class Warrior extends Character {
  private _armor: number;
  
  constructor({ name, health, strength, level, armor }: IWarriorParams) {
    super({ name, health, strength, level });
    this._armor = armor?? ARMOR_INIT;
  }

  damage(amount: number) {
    const reducedAmount = Math.max(amount - this._armor, 0);
    this._health -= reducedAmount;
    console.log(`${this._name} takes ${reducedAmount} damage! Remaining health: ${this._health}`);
  }
}