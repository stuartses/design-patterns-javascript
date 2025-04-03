import { missionState } from "../../questBoard.type";
import BaseMissionHandler from "../baseMissionHandler";
import { MissionRequest } from "../MissionHandler";

export default class NonOptionalMissionHandler extends BaseMissionHandler {
  handle(request: MissionRequest): void {
    const nonOptionals = request.missions.filter((mission) => mission.isOptional === false && mission.id !== request.newMission.id);
    const inProgress = nonOptionals?.filter((mission) => mission.state === missionState.inProgress) || [];

    if (inProgress.length > 0) {
      console.log(`❌ Mission denied: There are non-optional missions in progres: ${inProgress.length}. Complete this before to start a new mission`);
    } else {
      console.log(`✅ Non-Optional missions requirement met.`);
      super.handle(request);
    }
  }
}