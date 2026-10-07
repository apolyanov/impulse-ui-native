import { useEffect } from "react";
import { BackHandler } from "react-native";

import { useEventCallback } from "./use-event-callback.hook";

export function useBackHandler(callback: () => boolean, enabled = true): void {
  const handleBack = useEventCallback(callback);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const listener = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack,
    );

    return () => listener.remove();
  }, [enabled, handleBack]);
}
