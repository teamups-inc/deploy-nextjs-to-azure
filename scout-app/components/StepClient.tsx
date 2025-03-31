import { ISetupGuideStep } from "@/types/ISetupGuideStep";

interface IStepProps {
  step: ISetupGuideStep;
  onStepClick: (step: ISetupGuideStep) => void;
}

export default function StepClient({ step, onStepClick }: IStepProps) {
  const { images, number, title, description } = step;
  return (
    <div
      onClick={() => onStepClick(step)}
      className={`flex gap-4 group ${
        images != null
          ? "cursor-pointer hover:bg-blue-50 hover:text-black p-2 rounded-md transition-colors"
          : ""
      }`}
    >
      <div className="flex-shrink-0">
        <div className="bg-primary/20 h-8 w-8 rounded-full flex items-center justify-center text-primary font-medium">
          {number}
        </div>
      </div>
      <div>
        <h4 className="font-medium text-white group-hover:text-primary/20 mb-1">
          {title}
        </h4>
        <p className="text-gray-300 group-hover:text-primary/20">
          {description}
        </p>
        {images && images.length > 0 && (
          <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full mt-1">
            {images.length} {images.length === 1 ? "image" : "images"}
          </span>
        )}
      </div>
    </div>
  );
}
