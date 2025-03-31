import { File } from "lucide-react";
import { IPanelSection } from "@/types/IPanelSection";

interface ISetupListProps {
  sections: IPanelSection[];
  onSectionClick: (section: IPanelSection) => void;
  selectedSectionId?: string;
}

export default function SetupListClient({
  sections,
  onSectionClick,
  selectedSectionId,
}: ISetupListProps) {
  return (
    <div className="p-6 bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-white">Setup</h2>

      <div className="space-y-2">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => onSectionClick(section)}
            className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 cursor-pointer ${
              selectedSectionId === section.id
                ? "bg-primary/10 border-primary/30 border"
                : "hover:bg-gray-800 border border-transparent"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="text-gray-400">
                <File
                  size={20}
                  className={selectedSectionId === section.id ? "text-primary" : ""}
                />
              </div>
              <span
                className={`font-medium ${
                  selectedSectionId === section.id ? "text-primary" : "text-gray-300"
                }`}
              >
                {section.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
