import MissionHandler, { MissionRequest } from "./MissionHandler";

export default abstract class BaseMissionHandler implements MissionHandler {
  private _nextHandler: MissionHandler | null = null;

  setNext(handler: MissionHandler): MissionHandler {
    this._nextHandler = handler;
    return handler;
  }

  handle(request: MissionRequest): void {
    if (this._nextHandler) {
      this._nextHandler.handle(request);
    } else {
      console.log(`✅ New Mission "<<<${request.newMission.description}>>>" successfully accepted! 🎉`);
    }
  }
}