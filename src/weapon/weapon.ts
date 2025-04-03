import Prototype from "../prototype/prototype";
import IWeapon from "./weapon.types";

class Weapon implements IWeapon, Prototype<Weapon> {
  protected _name: string;
  protected _attackPoints: number; 
  
  constructor(name: string, attackPoints: number){
    this._name = name;
    this._attackPoints = attackPoints;
  }

  getAttackPoints() {
    return this._attackPoints;
  }

  // prototype pattern
  clone(): Weapon {
    // return new Weapon(this._name, this._attackPoints); // simple clone
    return Object.assign(new Weapon("", 0), this); // allowing clonning for more properties in the future
  }
}

export default Weapon;