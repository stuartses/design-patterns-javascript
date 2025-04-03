export default interface IWeapon {
  getAttackPoints(): number;
}

export enum weaponType {
  sword = "sword",
  bow = "bow",
}