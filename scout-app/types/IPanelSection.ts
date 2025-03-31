import { ISetupGuideStep } from "./ISetupGuideStep";

export interface IPanelSection {
  id: string;
  name: string;
  content: {
    title: string;
    steps: ISetupGuideStep[];
  };
}