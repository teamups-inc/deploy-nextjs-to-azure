import { IPanelSection } from "@/types/IPanelSection";
import { ISetupGuideStep } from "@/types/ISetupGuideStep";
import ActiveStepClient from "./ActiveStepClient";
import StepClient from "./StepClient";

interface IMainPanelProps {
  activeSection: IPanelSection;
  activeStep: ISetupGuideStep | null;
  setActiveStep: (step: ISetupGuideStep | null) => void;
}

export default function MainPanelClient({
  activeSection,
  activeStep,
  setActiveStep,
}: IMainPanelProps) {
  const backgroundStyles =
    "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900";

  return (
    <div
      className={`h-full ${backgroundStyles} p-10 overflow-y-auto animate-fade-in`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-white">
          {activeSection.content.title}
        </h2>

        <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Steps</h3>

          {activeStep ? (
            <ActiveStepClient
              step={activeStep}
              goBack={() => setActiveStep(null)}
            />
          ) : (
            <div className="space-y-6">
              {activeSection.content.steps &&
                activeSection.content.steps.map((step) => (
                  <StepClient
                    key={step.number}
                    step={step}
                    onStepClick={(step) => {
                      setActiveStep(step);
                    }}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
