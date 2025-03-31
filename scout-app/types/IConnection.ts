import { TConnectionStatus } from "./TConnectionStatus";
import { ISetupGuideStep } from "./ISetupGuideStep";

export interface IConnection {
  id: string;
  name: string;
  status: TConnectionStatus;
  image?: string;
  setupSteps: ISetupGuideStep[];
}
