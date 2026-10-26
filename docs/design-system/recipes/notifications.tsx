import { useCallback } from "react";

import { useOverlayContext } from "@impulse-ui-native/overlay";
import { Button } from "@impulse-ui-native/primitives";

import { RecipeToastContent } from "./recipe-toast-content";
import { RecipeToastOverlay } from "./recipe-toast-overlay";

export function NotificationsRecipe() {
  const { store } = useOverlayContext();
  const notify = useCallback(() => {
    store
      .register({
        id: "recipe-saved",
        title: "Changes saved",
        Component: RecipeToastOverlay,
        Content: RecipeToastContent,
      })
      .open();
  }, [store]);
  return <Button onPress={notify}>Show saved notification</Button>;
}
