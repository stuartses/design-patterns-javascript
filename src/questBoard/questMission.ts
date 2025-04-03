import { randomUUID } from 'crypto';
import { missionState } from './questBoard.type';

export default class QuestMission {
  id: string;
  description: string;
  state: missionState;
  isOptional: boolean;

  constructor(description: string, optional?: boolean) {
    this.id = randomUUID();
    this.description = description;
    this.state = missionState.inProgress;
    this.isOptional = optional?? true;
  }
}