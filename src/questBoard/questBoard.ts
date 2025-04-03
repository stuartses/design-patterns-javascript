import Player from "../player/player";
import IQuestBoard, { missionState } from "./questBoard.type";
import QuestMission from "./questMission";

export default class QuestBoard implements IQuestBoard {
  private _name: string;
  private _missions: Map<string, QuestMission>; // faster for look by id
  private _subscribers: Player[];

  constructor(name: string) {
    this._name = name;
    this._missions = new Map();
    this._subscribers = [];
  }
  
  subscribe(user: Player) {
    if (!this._subscribers.includes(user)) {
      this._subscribers.push(user);
    }
  }

  unsubscribe(user: Player) {
    this._subscribers = this._subscribers.filter((item) => item !== user);
  }

  notify(action: string, mission: QuestMission) {
    this._subscribers.map((item) => item.questNotify(this._name, action, mission.description));
  }

  addMission(missionDescription: string, optional?: boolean): QuestMission {
    const newMission = new QuestMission(missionDescription, optional);
    this._missions.set(newMission.id, newMission);
    this.notify('added', newMission);

    return newMission;
  }

  removeMission(id: string) {
    const missionToRemove = this._missions.get(id);

    if (missionToRemove) {
      this._missions.delete(id);
      this.notify('removed', missionToRemove);
    }
    
  }

  updateMission(id: string, state: missionState) {
    const mission = this._missions.get(id);

    if (mission) {
      this._missions.set(mission.id, { ...mission, state });
    }
  }

  getMissions(): QuestMission[] {
    return Array.from(this._missions.values());
  }

  getSubscribers(): Player[] {
    return this._subscribers;
  }
}