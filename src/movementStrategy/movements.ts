import MovementStrategy from "./movementStrategy";

export class Fly implements MovementStrategy {
  move() {
    console.log('Flying through the sky!');
  }
}

export class Walk implements MovementStrategy {
  move() {
    console.log('Walking on the ground');
  }
}

export class Teleport implements MovementStrategy {
  move() {
    console.log('Teleporting to another side');
  }
}