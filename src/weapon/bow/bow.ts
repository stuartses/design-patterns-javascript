import Weapon from "../weapon";
import { weaponType } from "../weapon.types";

export default class Bow extends Weapon {
  constructor(attackPoints: number = 8) {
    super(weaponType.bow, attackPoints);
  }

  clone(): Bow {
    return new Bow(this._attackPoints);
  }
}