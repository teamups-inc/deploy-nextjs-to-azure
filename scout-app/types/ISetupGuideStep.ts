export interface ISetupGuideStep {
  number: number;
  title: string;
  description: string;
  images: {
    src: string;
    instruction: string;
  }[];
}
