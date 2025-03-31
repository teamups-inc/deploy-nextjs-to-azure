import { IConnection } from "@/types/IConnection";
import { ISetupGuideStep } from "@/types/ISetupGuideStep";

const supabaseSetupSteps: ISetupGuideStep[] = [
  {
    number: 1,
    title: "Gather Connection Details from Vercel",
    description:
      "Collect the necessary connection details from your Vercel environment variables (you may have these in your local .env file).",
    images: [
      {
        src: "/vercel-env-1-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction: "Go to vercel",
      },
      {
        src: "/vercel-env-2-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction: "Select your project.",
      },
      {
        src: "/vercel-env-3-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction: "Select the projects tab.",
      },
      {
        src: "/vercel-env-4-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction: "Select the environments section.",
      },

      {
        src: "/vercel-env-5-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction:
          "Scroll down until you see the Environments and select the appropriate environment.",
      },
      {
        src: "/supabase-vercel-env-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction:
          "Locate your database environment variables. These are typically prefixed `SUPABASE` and `POSTGRES`.",
      },
    ],
  },
  {
    number: 2,
    title: "Update Connection Details in Azure Web App",
    description:
      "Follow the steps below to update your connection details in the Azure web app configuration.",
    images: [
      {
        src: "/webapp-env-1-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction:
          "On your webapp under `Settings` go to the `Environment variables` section.",
      },
      {
        src: "/webapp-env-2-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction: "Hit `Add` to fill in all of your environment variables.",
      },
      {
        src: "/webapp-env-2-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
        instruction:
          "Important: Ensure you hit `Apply` once you've added all environment variables.",
      },
    ],
  },
];

export const supabaseConnection: IConnection = {
  id: "supabase",
  name: "Supabase",
  status: "not-connected",
  setupSteps: supabaseSetupSteps,
};
