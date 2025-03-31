"use client";
import ConnectionListClient from "@/components/ConnectionListClient";
import MainPanelClient from "@/components/MainPanelClient";
import SetupListClient from "@/components/SetupListClient";
import { azureSetupSteps, codeChangesSteps } from "@/lib/azure/guide";
import { connections } from "@/lib/connections";
import { IConnection } from "@/types/IConnection";
import { IPanelSection } from "@/types/IPanelSection";
import { ISetupGuideStep } from "@/types/ISetupGuideStep";
import { TConnectionStatus } from "@/types/TConnectionStatus";
import { useEffect, useState } from "react";

export default function Page() {
  const [connectionsList, setConnectionsList] =
    useState<IConnection[]>(connections);
  const [activeStep, setActiveStep] = useState<ISetupGuideStep | null>(null);
  const [activeSection, setActiveSection] =
    useState<IPanelSection>(azureSetupSteps);
  const setupSections = [azureSetupSteps, codeChangesSteps];

  // Test a specific connection and return the updated connection object
  const testConnection = async (
    connection: IConnection
  ): Promise<IConnection> => {
    try {
      const inProgressConnection = {
        ...connection,
        status: "in-progress" as const,
      };

      // Update the connection in the list to show in-progress state
      setConnectionsList((prev) =>
        prev.map((conn) =>
          conn.id === connection.id ? inProgressConnection : conn
        )
      );

      // Make the API call to check connection
      const response = await fetch(`/api/${connection.id}`);
      const status: TConnectionStatus =
        response.status === 200 ? "connected" : "not-connected";

      return { ...connection, status };
    } catch (error) {
      console.error(`Error testing ${connection.id} connection:`, error);
      return { ...connection, status: "not-connected" as TConnectionStatus };
    }
  };

  // Test all connections
  const testAllConnections = async () => {
    // Start all connection tests but don't wait for all to complete
    connectionsList.forEach(async (connection) => {
      // Test each connection individually
      const updatedConnection = await testConnection(connection);

      // Update the connection in the list as soon as it completes
      setConnectionsList((prev) =>
        prev.map((conn) =>
          conn.id === connection.id ? updatedConnection : conn
        )
      );

      // No need to update active section connection anymore
    });
  };

  // Test connections on initial page load
  useEffect(() => {
    testAllConnections();
  }, []);

  const handleConnectionClick = async (connection: IConnection) => {
    setActiveSection({
      id: connection.id,
      name: connection.name,
      content: {
        title: connection.name,
        steps: connection.setupSteps,
      },
    });
    setActiveStep(null);

    // Test the connection when clicked
    const updatedConnection = await testConnection(connection);

    // Update the connection in the list
    setConnectionsList((prev) =>
      prev.map((conn) => (conn.id === connection.id ? updatedConnection : conn))
    );

    // Update the active section
    setActiveSection({
      id: updatedConnection.id,
      name: updatedConnection.name,
      content: {
        title: updatedConnection.name,
        steps: updatedConnection.setupSteps,
      },
    });
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - List of sections */}
      <div className="w-1/3 border-r border-gray-700 bg-gray-900 overflow-y-auto">
        <SetupListClient
          sections={setupSections}
          onSectionClick={(section) => {
            setActiveSection(section);
            setActiveStep(null);
          }}
          selectedSectionId={activeSection.id}
        />
        <ConnectionListClient
          connections={connectionsList}
          onConnectionClick={handleConnectionClick}
          selectedConnectionId={
            !setupSections.some(section => section.id === activeSection.id)
              ? activeSection.id
              : undefined
          }
        />
      </div>

      {/* Right side - Main panel */}
      <div className="w-2/3">
        <MainPanelClient
          activeSection={activeSection}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </div>
  );
}
