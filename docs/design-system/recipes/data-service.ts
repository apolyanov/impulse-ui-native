import type { Axios } from "axios";

import { EchoInstance } from "@impulse-ui-native/echo";
import { createEndpointFactory } from "@impulse-ui-native/endpoint";

declare module "@impulse-ui-native/echo" {
  interface EchoEvents {
    "recipe.project.saved": { id: string };
  }
}

// Call once with the application's configured client; render query hooks inside QueryClientProvider.
export function createProjectService(client: Axios) {
  const endpoint = createEndpointFactory(client);
  const useProjects = endpoint.createQuery<{ id: string; title: string }[]>({
    key: ["recipe-projects"],
    path: "/projects",
  });
  return {
    useProjects,
    notifySaved: (id: string) =>
      EchoInstance.emit("recipe.project.saved", { id }),
  };
}

export { useProjectEditor } from "./recipe-project-editor.hook";
