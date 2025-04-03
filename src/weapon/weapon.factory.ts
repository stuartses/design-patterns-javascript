import Bow from "./bow/bow";
import Sword from "./sword/sword";
import Weapon from "./weapon"
import { weaponType } from "./weapon.types";

export default class WeaponFactory {
  static createWeapon(type: weaponType, attackPoints?: number): Weapon {
    switch (type) {
      case weaponType.sword:
        return new Sword(attackPoints);
      case weaponType.bow:
        return new Bow();
      default:
        throw new Error(`Unknow Weapon type: ${type}`);
    }
  }
}