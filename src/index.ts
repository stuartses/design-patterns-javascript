import GameManager from "./gameManager/gameManager";
import CharacterFactory from "./character/character.factory";
import { characterType } from "./character/character.types";
import WeaponFactory from "./weapon/weapon.factory";
import { weaponType } from "./weapon/weapon.types";
import Player from "./player/player";
import QuestBoard from "./questBoard/questBoard";
import { Teleport, Walk } from "./movementStrategy/movements";
import FireEnchantmentDecorator from "./character/decorators/fireEnchantmentDecorator";
import IceEnchantmentDecorator from "./character/decorators/iceEnchantmentDecorator";
import ArmorBuilder from "./armor/armorBuilder";
import CharacterActions from "./actions/character/characterActions";
import { AttackCommand, MoveCommand } from "./actions/character/characterCommands";
import Actions from "./actions/actions";
import NonOptionalMissionHandler from "./questBoard/missionHandler/handlers/nonOptionalMissionHandler";
import NumberOfMissionHandler from "./questBoard/missionHandler/handlers/numberOfMissionsHandler";
import { missionState } from "./questBoard/questBoard.type";
import QuestBoardProxy from "./questBoard/proxies/questBoardProxy";

//Singleton
const gameManager = GameManager.getInstance();
const gameManagerCP = GameManager.getInstance();
console.log(`Singleton for Game Manager? : ${ gameManager === gameManagerCP }`);
console.log('========= GAME ========');
console.log(`Game status: ${gameManager.getGameState()}`);
gameManager.setGameState("Playing");

const player1 = new Player("Peter");
gameManager.addPlayer(player1);

const player2 = new Player("Maria");
gameManager.addPlayer(player2);

console.log(`Game status: ${gameManager.getGameState()}`);
const activePlayers = gameManager.getActivePlayers().map((player) => player.name)
console.log(`Players: ${JSON.stringify(activePlayers)}`);
console.log('.... end singleton....');

// Using Factory
const link = CharacterFactory.createCharacter(characterType.warrior, { name: 'Link', armor: 100 })
const gandalf = CharacterFactory.createCharacter(characterType.mage, { name: 'Gandalf', magicPower: 120 })
const sword = WeaponFactory.createWeapon(weaponType.sword);
const swordImproved = WeaponFactory.createWeapon(weaponType.sword, 50);

// Using Prototype
console.log('....PROTOTYPE....');
const swordClone = sword.clone();
console.log(`Same? ${ sword === swordClone }`);
console.log(`Same props? ${ sword.getAttackPoints() === swordClone.getAttackPoints() }, attack points: ${swordClone.getAttackPoints() }`)
const swordImprovedClone = swordImproved.clone();
console.log(`Same Sword improved? ${ swordImproved === swordImprovedClone }`);
console.log(`Same props for Sword improved? ${ swordImproved.getAttackPoints() === swordImprovedClone.getAttackPoints() }, attack points: ${swordImprovedClone.getAttackPoints()}`)
console.log('...END PROTOTYPE...');

// Using Observer pattern
console.log('....OBSERVER....');
const board = new QuestBoard("Beyond the sky");
board.subscribe(player1);
console.log(`Subscribers: ${JSON.stringify(board.getSubscribers())}`);
const newMission = board.addMission('Get excaliburd');
board.subscribe(player2);
board.removeMission(newMission.id);
console.log('....END OBSERVER....');

// Using Strategy pattern
console.log('....STRATEGY....');
link.setMovementStrategy(new Walk());
link.move();
gandalf.move();
gandalf.setMovementStrategy(new Teleport());
gandalf.move();
console.log('....END STRATEGY...');

// Basic features
link.attack();
link.equipWeapon(sword);
link.attack();
link.damage(50);
gandalf.attack();
gandalf.damage(80);

// Using Decorator Pattern
console.log('.....DECORATOR...');
const fireEnchantment = new FireEnchantmentDecorator(link);
fireEnchantment.attack();
const iceEnchantment = new IceEnchantmentDecorator(fireEnchantment);
iceEnchantment.attack();
console.log('....END DECORATOR...');

// Using builder patterns
console.log('....BUILDER....');
const warriorArmor = new ArmorBuilder("Warrior wood armor")
  .setDefense(15)
  .setMaterial("Wood")
  .setEnchantment("Return rocks")
  .setEnchantment("Expand on water")
  .build();

console.log(warriorArmor.describe());
console.log('....END BUILDER....');

// Using Command Pattern
console.log('....COMMAND....');
const characterAction = new CharacterActions(gandalf);
const actionAttack = new AttackCommand(characterAction);
const moveAction = new MoveCommand(characterAction);
const inputDevice = new Actions();
inputDevice.setCommand(actionAttack);
inputDevice.pressButton();
inputDevice.setCommand(moveAction);
inputDevice.pressButton();
console.log('....END COMMAND....');

// Using chain of responsability Pattern
console.log('....CHAIN OF RESPONSABILITY....');
const nonOptionalCheck = new NonOptionalMissionHandler();
const numberOfMissionCheck = new NumberOfMissionHandler();
nonOptionalCheck.setNext(numberOfMissionCheck);

board.addMission('Get excaliburd');
board.addMission('Go to the north');
board.addMission("Play with a fish");

const missionLearn = board.addMission("Learn thunder storm song", false);
nonOptionalCheck.handle({
  missions: board.getMissions(),
  newMission: missionLearn,
});

const missionPlay = board.addMission("Play thunder storm song");
nonOptionalCheck.handle({
  missions: board.getMissions(),
  newMission: missionPlay,
});

board.updateMission(missionLearn.id, missionState.completed);
nonOptionalCheck.handle({
  missions: board.getMissions(),
  newMission: missionPlay,
});

console.log('....END CHAIN OF RESPONSABILITY.....');

// Using Proxy Pattern
console.log('....PROXY PATTERN....');
const boardProtected = new QuestBoardProxy("Protected Board", "user");
boardProtected.addMission("Look for a rupia");
console.log('....END PROXY PATTERN....');