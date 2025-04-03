import Player from "../../player/player";
import QuestBoard from "../questBoard";
import IQuestBoard, { missionState } from "../questBoard.type";
import QuestMission from "../questMission";

export default class QuestBoardProxy implements IQuestBoard {
  private _role: string;
  private _questBoard: QuestBoard;

  constructor(boardName: string, userRole: string) {
    this._role = userRole;
    this._questBoard = new QuestBoard(boardName);
  }

  subscribe(user: Player): void {
    throw new Error("Method not implemented.");
  }
  unsubscribe(user: Player): void {
    throw new Error("Method not implemented.");
  }
  notify(action: string, mission: QuestMission): void {
    throw new Error("Method not implemented.");
  }
  addMission(missionDescription: string, optional?: boolean): QuestMission {
    if (this._role !== "admin") {
      throw new Error("⛔ Access Denied: Only admins can add missions!");
    } 
    
    return this._questBoard.addMission(missionDescription, optional);
  }
  removeMission(id: string): void {
    if (this._role !== "admin") {
      throw new Error("⛔ Access Denied: Only admins can remove missions!");
    } 
    
    this._questBoard.removeMission(id);;
  }
  updateMission(id: string, state: missionState): void {
    if (this._role !== "admin") {
      throw new Error("⛔ Access Denied: Only admins can update missions!");
    }
    this._questBoard.updateMission(id, state);
  }
  getMissions(): QuestMission[] {
    throw new Error("Method not implemented.");
  }
  getSubscribers(): Player[] {
    throw new Error("Method not implemented.");
  }
  
}