export default class Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  questNotify(questName: string, action: string, mission: string) {
    console.log(`${this.name}: the mission ${mission} was ${action} from the quest ${questName}`);
  }
}