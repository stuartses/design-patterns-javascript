import Player from "../player/player";
import QuestMission from "./questMission";

export enum missionState {
  inProgress = "inProgress",
  completed = "completed"
}

export default interface IQuestBoard {
  subscribe(user: Player): void;
  unsubscribe(user: Player): void;
  notify(action: string, mission: QuestMission): void;
  addMission(missionDescription: string, optional?: boolean): QuestMission;
  removeMission(id: string): void;
  updateMission(id: string, state: missionState): void;
  getMissions(): QuestMission[];
  getSubscribers(): Player[];
}