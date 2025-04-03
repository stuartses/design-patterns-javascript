import { IArmorParams } from "./armor.type";
import { DEFAULT_DEFENSE, DEFAULT_MATERIAL } from "./constants";

export default class Armor {
  private _name: string;
  private _defense: number;
  private _material: string;
  private _enchantments: string[];

  constructor({ name, defense, material, enchantments }: IArmorParams) {
    this._name = name;
    this._defense = defense?? DEFAULT_DEFENSE;
    this._material = material?? DEFAULT_MATERIAL;
    this._enchantments = enchantments?? [];
  }

  describe() {
    return `${this._name} (
      Material: ${this._material} - 
      Defense: ${this._defense}.
      Enchantments: ${this._enchantments.join(",") || "None"} 
    )`;
  }
}