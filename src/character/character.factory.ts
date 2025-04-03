import Character from "./character";
import { characterType } from "./character.types";
import Mage from "./mage/mage";
import Warrior from "./warrior/warrior";

/*
  Implementing factory design pattern
*/

export default class CharacterFactory {
  static createCharacter(type: characterType, params: any): Character {
    switch (type) {
      case characterType.warrior:
        return new Warrior(params);
      case characterType.mage:
        return new Mage(params);
      default:
        throw new Error(`Unknow character type: ${type}`);
    }
  }
};