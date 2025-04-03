import ICharacter, { ICharacterParams } from "./character.types";
import Weapon from "../weapon/weapon";
import MovementStrategy from "../movementStrategy/movementStrategy";
import { Walk } from "../movementStrategy/movements";

const HEALT_INIT = 100;
const STRENGHT_INIT = 100;
const LEVEL_INIT = 1;

class Character implements ICharacter{
  protected _name: string;
  protected _health: number;
  protected _strength: number;
  protected _level: number;
  protected _equippedWeapon!: Weapon;
  private _movement: MovementStrategy;

  constructor({ name, health, strength, level }: ICharacterParams) {
    this._name = name;
    this._health = health?? HEALT_INIT;
    this._strength = strength?? STRENGHT_INIT;
    this._level = level?? LEVEL_INIT;
    this._movement = new Walk();
  }

  attack() {
    const baseAttack = this._strength;
    const extra = this.getAttackBonus();
    console.log(`${this._name} attacks with strength: ${baseAttack + extra}`);
  }

  setStrength(strength: number) {
    this._strength = strength;
  }

  getStrength() {
    return this._strength;
  }

  equipWeapon(weapon: Weapon) {
    this._equippedWeapon = weapon;
  }

  protected getAttackBonus(): number {
    return this._equippedWeapon? this._equippedWeapon.getAttackPoints() : 0;
  }

  damage(amount: number) {
    this._health -= amount;
    console.log(`${this._name} takes ${amount} damage! Remaining health: ${this._health}`);
  }

  getStats() {
    return `Name: ${this._name}. Health: ${this._health}. Strength: ${this._strength}. Level: ${this._level}`
  }

  move() {
    console.log(` => ${this._name} is now:`)
    this._movement.move();
  }

  setMovementStrategy(strategy: MovementStrategy) {
    this._movement = strategy;
  }
}

export default Character;