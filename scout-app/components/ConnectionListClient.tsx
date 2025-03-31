import { IConnection } from "@/types/IConnection";
import { Database } from "lucide-react";
import ConnectionStatusClient from "./ConnectionStatusClient";

interface ConnectionListProps {
  connections: IConnection[];
  onConnectionClick: (connection: IConnection) => void;
  selectedConnectionId?: string;
}

export default function ConnectionListClient({
  connections,
  onConnectionClick,
  selectedConnectionId,
}: ConnectionListProps) {
  return (
    <div className="p-6 bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Database Connections
      </h2>
      <div className="space-y-2">
        {connections.map((connection) => (
          <div
            key={connection.id}
            onClick={() => onConnectionClick(connection)}
            className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 cursor-pointer ${
              selectedConnectionId === connection.id
                ? "bg-primary/10 border-primary/30 border"
                : "hover:bg-gray-800 border border-transparent"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="text-gray-400">
                <Database
                  size={20}
                  className={
                    selectedConnectionId === connection.id ? "text-primary" : ""
                  }
                />
              </div>
              <span
                className={`font-medium ${
                  selectedConnectionId === connection.id
                    ? "text-primary"
                    : "text-gray-300"
                }`}
              >
                {connection.name}
              </span>
            </div>
            <ConnectionStatusClient status={connection.status} />
          </div>
        ))}
      </div>
    </div>
  );
}
