import { missionState } from "../../questBoard.type";
import BaseMissionHandler from "../baseMissionHandler";
import { MissionRequest } from "../MissionHandler";

export default class NumberOfMissionHandler extends BaseMissionHandler {
  handle(request: MissionRequest): void {
    const inProgress = request.missions.filter((mission) => mission.state === missionState.inProgress);

    if (inProgress.length > 4) {
      console.log(`❌ Mission denied: There are still more than 5 missions in progres: ${inProgress.length}. Complete more missions before to start a new one`);
    } else {
      console.log(`✅ In progress missions requirement met.`);
      super.handle(request);
    }
  }
}