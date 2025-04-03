import Character from "../character";
import { IMageParams } from "./mage.type";
import { MAGIC_POWER_INIT } from "../constants";


export default class Mage extends Character {
  private _magicPower: number;

  constructor({ name, health, strength, level, magicPower }: IMageParams) {
    super({ name, health, strength, level });
    this._magicPower = magicPower?? MAGIC_POWER_INIT;
  }

  damage(amount: number) {
    const reducedAmount = Math.max(amount - this._magicPower, 0);
    this._health -= reducedAmount;
    console.log(`${this._name} takes ${reducedAmount} damage! Remaining health: ${this._health}`);
  }

  castSpell(spell: string) {
    console.log(`${this._name} casts ${spell} with power: ${this._magicPower}`);
  }
}