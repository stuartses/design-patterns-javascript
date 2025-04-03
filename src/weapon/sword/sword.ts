import Weapon from "../weapon";
import { weaponType } from "../weapon.types";

export default class Sword extends Weapon {
  constructor(attackPoints: number = 10) {
    super(weaponType.sword, attackPoints);
  }

  clone(): Sword {
    return new Sword(this._attackPoints);
  }
}