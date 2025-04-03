import Armor from "./armor";
import { DEFAULT_DEFENSE, DEFAULT_MATERIAL } from "./constants";

export default class ArmorBuilder {
  private _name: string;
  private _defense: number;
  private _material: string;
  private _enchantments: string[];

  constructor(name: string) {
    this._name = name;
    this._defense = DEFAULT_DEFENSE;
    this._material = DEFAULT_MATERIAL;
    this._enchantments = [];
  }

  setDefense(defense: number): ArmorBuilder {
    this._defense = defense;
    return this;
  }

  setMaterial(material: string):ArmorBuilder {
    this._material = material;
    return this;
  }

  setEnchantment(enchantment: string): ArmorBuilder {
    this._enchantments.push(enchantment);
    return this;
  }

  build() {
    return new Armor({
      name: this._name,
      defense: this._defense,
      material: this._material,
      enchantments: this._enchantments
    });
  }
}