import { ISetupGuideStep } from "@/types/ISetupGuideStep";
import { ArrowLeft } from "lucide-react";

interface IActiveStepProps {
  step: ISetupGuideStep;
  goBack: () => void;
}

export default function ActiveStepClient({ goBack, step }: IActiveStepProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 inline-block p-[2px] relative rounded-md shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-border bg-[length:400%_100%] animate-border-spin"></div>
        <button
          onClick={() => goBack()}
          className="relative px-3 py-2 bg-blue-600 text-white rounded-[4px] flex items-center gap-1.5"
        >
          <ArrowLeft size={16} />
          <span>Back to steps</span>
        </button>
      </div>

      <div className="rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-3 ">{step.title}</h3>
        <p className="text-gray-200 mb-4">{step.description}</p>

        {step.images && step.images.length > 0 && (
          <div className="w-full mt-6 mb-4">
            <h4 className="font-medium mb-3">Guide:</h4>
            <ul className="space-y-8">
              {step.images.map((image, index) => (
                <li key={index} className="border rounded-lg p-4">
                  <p className="mb-3 text-gray-200">{image.instruction}</p>
                  <img
                    src={image.src}
                    alt={`Step ${step.number} - ${index + 1}`}
                    className="rounded-md w-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
