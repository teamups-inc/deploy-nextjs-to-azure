import { IPanelSection } from "@/types/IPanelSection";

export const azureSetupSteps: IPanelSection = {
  id: "setup",
  name: "Setup Azure Resources",
  content: {
    title: "Setup Azure Resources",
    steps: [
      {
        number: 1,
        title: "Create an Azure Docker Container Registry",
        description:
          "Set up a new Azure Container Registry (ACR) to store and manage your Docker container images.",
        images: [
          {
            src: "/registry-1-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction: "Search for `Container registries` and click on it",
          },
          {
            src: "/registry-2-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction: "Select `Create`",
          },
          {
            src: "/registry-3-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction: "Select a Resource Group or select `Create New`.",
          },
          {
            src: "/registry-3-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction:
              "Once the registry is created search for access keys on that registry.",
          },
          {
            src: "/registry-4-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction: "Enable the admin user.",
          },
        ],
      },
      {
        number: 2,
        title: "Create a Web App in Azure",
        description: "Set up a new Azure Web App to host your application.",
        images: [
          {
            src: "/webapp-1-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction: "Search for App Services and click on it",
          },
          {
            src: "/webapp-2-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction: "Hover over Create and select Web App",
          },
          {
            src: "/webapp-3-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction:
              "Select a resource group or click on `Create New`. For the Linux plan, select one or create a new one. Click on `Review + Create`",
          },
          {
            src: "/webapp-4-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction:
              "Once your deployment is complete, select Go to Resource",
          },
          {
            src: "/webapp-5-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction:
              "Once you're on the web app that was created, search for Deployment Center so we can deploy via GitHub Actions",
          },
          {
            src: "/webapp-6-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction:
              "Select GitHub Actions. You should get a warning in red, click on it so we can allow GitHub Actions to authenticate and deploy on your behalf",
          },
          {
            src: "/webapp-7-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction: "Turn on SCM Basic Auth and hit Save",
          },
          {
            src: "/webapp-8-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction:
              "Once saved go back to the deployment center and select github actions.",
          },
          {
            src: "/webapp-9-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
            instruction: "Fill in the information for your repo and hit save.",
          },
        ],
      },
    ],
  },
};

export const codeChangesSteps: IPanelSection = {
  id: "code-changes",
  name: "Code Changes",
  content: {
    title: "Code Changes",
    steps: [
      {
        number: 1,
        title: "Update your next.config.js",
        description: "Update your Next config, so it runs in standalone mode.",
        images: [
          {
            instruction: "You can find the following code snippet in our repo.",
            src: "/next-config-code-1-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
          },
        ],
      },
      {
        number: 2,
        title: "Create a Dockerfile",
        description:
          "Create your own Dockerfile or use ours as reference. Our Docker image works out of the box.",
        images: [
          {
            instruction: "You can find the following code snippet in our repo.",
            src: "/docker-config-code-1-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
          },
          {
            instruction:
              "(Optional) Your code may not build if it's missing environment variables. You could add a temporary one like this below.",
            src: "/docker-config-code-2-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
          },
        ],
      },
      {
        number: 3,
        title: "Update GitHub Actions",
        description:
          "Update your GitHub Actions workflow to build and deploy your Docker container to Azure.",
        images: [
          {
            instruction:
              "If you pull, you should see a GitHub Actions workflow file created for you.",
            src: "/github-config-code-1-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
          },
          {
            instruction:
              "(Optional) Depending on where you placed your Dockerfile, you may need to update the context of your GitHub Action so it can find it.",
            src: "/github-config-code-2-7a9a8bd7-6e7a-46ee-84dc-4ffbe85895e9.png",
          },
        ],
      },
    ],
  },
};
