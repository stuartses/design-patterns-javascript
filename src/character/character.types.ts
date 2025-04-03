export interface ICharacterParams {
  name: string;
  health?: number;
  strength?: number;
  level?: number;
}

export default interface ICharacter {
  attack(): void;
  damage(amount: number): void;
  getStats(): string;
  getStrength(): number;
  setStrength(amout: number): void;
}

export enum characterType {
  warrior = "warrior",
  mage = "mage",
}