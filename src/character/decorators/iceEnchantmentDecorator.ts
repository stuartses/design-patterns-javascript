import ICharacter from "../character.types";

const ADD_STRENGHT = 30;
const ADD_DAMAGE = 8;

export default class IceEnchantmentDecorator implements ICharacter {
  private _character: ICharacter;
  
    constructor(character: ICharacter) {
      this._character = character
    }
  
    attack(): void {
      console.log(`❄️ Freezing the enemy!`);
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