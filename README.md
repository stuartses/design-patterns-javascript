# Simple RPG Game: Design Patterns in Action
This repository was created as an exercise to learn about design patterns in JavaScript.

## Install
```
npm i
```

## Script
#### Run in development mode
```
npm run dev
```

#### Build
```
npm run build
```

#### Run in production mode
```
npm run start
```

# Design Patterns used in this project
1. [Singleton - Game Manager](#1-singleton---game-manager)
2. [Factory - Weapon & Character Factory](#2-factory---weapon--character-factory)
3. [Prototype - Weapon Cloning](#3-prototype---weapon-cloning)
4. [Observer - Event System](#4-observer---event-system)
5. [Strategy - Movement System](#5-strategy---movement-system)
6. [Decorator - Attack Enhancements](#6-decorator---attack-enhancements)
7. [Builder - Armor Creation](#7-builder---armor-creation)
8. [Command - Action Buttons](#8-command---action-buttons)
9. [Chain of Responsibility - Mission Management](#9-chain-of-responsibility---mission-management)
10. [Proxy - Admin Actions](#10-proxy---admin-actions)

## 1. Singleton - Game Manager
**Pattern:** Ensures a single instance of a class.
**In the RPG:** The **GameManager** controls the global game state (levels, players, enemies), ensuring only one instance is running.

Example:
```
const gameManager = GameManager.getInstance();
const gameManagerCP = GameManager.getInstance();
console.log(`Singleton for Game Manager? : ${ gameManager === gameManagerCP }`);
console.log(`Game status: ${gameManager.getGameState()}`);

gameManager.setGameState("Playing");

const player1 = new Player("Peter");
gameManager.addPlayer(player1);

const player2 = new Player("Maria");
gameManager.addPlayer(player2);

console.log(`Game status: ${gameManager.getGameState()}`);
const activePlayers = gameManager.getActivePlayers().map((player) => player.name)
console.log(`Players: ${JSON.stringify(activePlayers)}`);
```

## 2. Factory - Weapon & Character Factory
**Pattern:** Creates objects without specifying their exact class.
**In the RPG:** The **WeaponFactory** generates different weapons (sword, bow), while the **CharacterFactory** creates different character types dynamically, simplifying object creation.

Example:
```
const link = CharacterFactory.createCharacter(characterType.warrior, { name: 'Link', armor: 100 })
const gandalf = CharacterFactory.createCharacter(characterType.mage, { name: 'Gandalf', magicPower: 120 })
const sword = WeaponFactory.createWeapon(weaponType.sword);
const swordImproved = WeaponFactory.createWeapon(weaponType.sword, 50);
```

## 3. Prototype - Weapon Cloning
**Pattern:** Allows cloning existing objects instead of creating them from scratch.
**In the RPG:** Used for **weapon cloning**, enabling the creation of copies with slight modifications without duplicating logic.

Example
```
const swordClone = sword.clone();
console.log(`Same? ${ sword === swordClone }`);
console.log(`Same props? ${ sword.getAttackPoints() === swordClone.getAttackPoints() }, attack points: ${swordClone.getAttackPoints() }`)
const swordImprovedClone = swordImproved.clone();
console.log(`Same Sword improved? ${ swordImproved === swordImprovedClone }`);
console.log(`Same props for Sword improved? ${ swordImproved.getAttackPoints() === swordImprovedClone.getAttackPoints() }, attack points: ${swordImprovedClone.getAttackPoints()}`)
```

## 4. Observer - Event System
**Pattern:** Allows objects to subscribe to events and get notified automatically.
**In the RPG:** The **event system** notifies subscribers when an action occurs, such as a player leveling up or an enemy being defeated.

Example
```
const board = new QuestBoard("Beyond the sky");
board.subscribe(player1);
console.log(`Subscribers: ${JSON.stringify(board.getSubscribers())}`);
const newMission = board.addMission('Get excaliburd');
board.subscribe(player2);
board.removeMission(newMission.id);
```

## 5. Strategy - Movement System
**Pattern:** Defines a family of interchangeable algorithms at runtime.
**In the RPG:** The **movement system** allows a character to switch between different movement strategies (fly, walk, teleport) without modifying the core logic.

Example
```
link.setMovementStrategy(new Walk());
link.move();
gandalf.move();
gandalf.setMovementStrategy(new Teleport());
gandalf.move();
```

## 6. Decorator - Attack Enhancements
**Pattern:** Dynamically adds functionality to objects.
**In the RPG:** **Attack enhancements** like **FireEnchantment** or **IceEnchantment** add new attack features to a character without modifying the base character class.

Example
```
const fireEnchantment = new FireEnchantmentDecorator(link);
fireEnchantment.attack();
const iceEnchantment = new IceEnchantmentDecorator(fireEnchantment);
iceEnchantment.attack();
```

## 7. Builder - Armor Creation
**Pattern:** Constructs complex objects step by step.
**In the RPG:** Used for **armor creation**, allowing customization of attributes like defense points, material, and enchantments.

Example
```
const warriorArmor = new ArmorBuilder("Warrior wood armor")
  .setDefense(15)
  .setMaterial("Wood")
  .setEnchantment("Return rocks")
  .setEnchantment("Expand on water")
  .build();

console.log(warriorArmor.describe());
```

## 8. Command - Action Buttons
**Pattern:** Encapsulates actions as objects, enabling undo or repeat functionality.
**In the RPG:** Used for **action buttons**, such as moving and attacking, facilitating an "undo" system and command macros.

Example
```
const characterAction = new CharacterActions(gandalf);
const actionAttack = new AttackCommand(characterAction);
const moveAction = new MoveCommand(characterAction);
const inputDevice = new Actions();
inputDevice.setCommand(actionAttack);
inputDevice.pressButton();
inputDevice.setCommand(moveAction);
inputDevice.pressButton();
```

## 9. Chain of Responsibility - Mission Management
**Pattern:** Allows multiple objects to process a request in sequence.
**In the RPG:** Applied in **mission management**, checking if a new mission can be added by verifying that there are no active non-optional missions or more than four active missions.

Example
```
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
```

## 10. Proxy - Admin Actions
**Pattern:** Acts as an intermediary to control access to an object.
**In the RPG:** Used in **admin actions**, where the proxy ensures that only users with the admin role can execute and board actions.

Example
```
const boardProtected = new QuestBoardProxy("Protected Board", "user");
boardProtected.addMission("Look for a rupia");
```


