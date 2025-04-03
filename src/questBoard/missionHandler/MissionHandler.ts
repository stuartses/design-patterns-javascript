import QuestMission from "../questMission";

export default interface MissionHandler {
  setNext(handler: MissionHandler): MissionHandler;
  handle(request: MissionRequest): void;
}

export interface MissionRequest {
  missions: QuestMission[],
  newMission: QuestMission
}