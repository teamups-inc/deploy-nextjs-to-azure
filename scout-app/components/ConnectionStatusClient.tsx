import { TConnectionStatus } from "@/types/TConnectionStatus";
import { CircleCheck, CircleX, Loader2 } from "lucide-react";

interface ConnectionStatusProps {
  status: TConnectionStatus;
}

export default function ConnectionStatusClient({
  status,
}: ConnectionStatusProps) {
  switch (status) {
    case "connected":
      return (
        <div className="flex items-center gap-1.5 text-success">
          <CircleCheck size={16} />
          <span className="text-sm font-medium">Connected</span>
        </div>
      );
    case "not-connected":
      return (
        <div className="flex items-center gap-1.5 text-error">
          <CircleX size={16} />
          <span className="text-sm font-medium">Not Connected</span>
        </div>
      );
    case "in-progress":
      return (
        <div className="flex items-center gap-1.5 text-warning">
          <Loader2 size={16} className="animate-spin" />
          <span className="text-sm font-medium">Connecting...</span>
        </div>
      );
    default:
      return null;
  }
}
