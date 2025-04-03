import Character from "../character";
import ICharacter from "../character.types";

const ADD_STRENGHT = 50;
const ADD_DAMAGE = 10;

export default class FireEnchantmentDecorator implements ICharacter {
  private _character: ICharacter;

  constructor(character: ICharacter) {
    this._character = character
  }

  attack(): void {
    console.log(`🔥 Fire Enchantment activated!`);
    const initialStrength = this._character.getStrength();
    this._character.setStrength(initialStrength + ADD_STRENGHT);
    this._character.attack();
    this._character.setStrength(initialStrength);
  }

  damage(amount: number): void {
    this._character.damage(ADD_DAMAGE);
  }

  getStats(): string {
    return this._character.getStats();
  }

  getStrength(): number {
    return this._character.getStrength();
  }

  setStrength(amount: number): void {
    this._character.setStrength(amount);
  }
  
}