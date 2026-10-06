import { memo, useMemo, useState } from "react";

import type { ToastTone } from "@impulse-ui-native/theme";
import type { ToastPlacement } from "@impulse-ui-native/toast";
import { useEventCallback } from "@impulse-ui-native/core";
import {
  OverlayHost,
  OverlayProvider,
  OverlayStore,
} from "@impulse-ui-native/overlay";
import { Portal } from "@impulse-ui-native/portal";
import { Button, View } from "@impulse-ui-native/primitives";

import { ToastStoryContent } from "./toast-story-content";
import { ToastStoryOverlay } from "./toast-story-overlay";
import { ToastStoryContext } from "./toast-story.context";

export const ToastPreview = memo(function ToastPreview({
  placement = "bottom",
  tone = "success",
  duration = 4000,
  disabled = false,
}: {
  placement?: ToastPlacement;
  tone?: ToastTone;
  duration?: number;
  disabled?: boolean;
}) {
  const [store] = useState(() => new OverlayStore());

  const configuration = useMemo(
    () => ({ placement, tone, duration, disabled }),
    [placement, tone, duration, disabled],
  );

  const show = useEventCallback(() =>
    store
      .register<{
        message: string;
        disabled: boolean;
      }>({
        id: "storybook-toast",
        Component: ToastStoryOverlay,
        Content: ToastStoryContent,
        title: ({ message }) => message,
      })
      .open({ message: "Changes saved", disabled }),
  );

  const showSeveral = useEventCallback(() => {
    for (let index = 1; index <= 5; index++) {
      store
        .register<{
          message: string;
          disabled: boolean;
        }>({
          id: "multiple-toast",
          Component: ToastStoryOverlay,
          Content: ToastStoryContent,
          title: ({ message }) => message,
        })
        .open({ message: "Message " + index, disabled });
    }
  });

  const dismiss = useEventCallback(() => {
    store
      .getOverlaysSnapshot()()
      .forEach((entry) => store.close(entry.id));
  });

  return (
    <>
      <View gap={8}>
        <Button onPress={show}>Show toast</Button>
        <Button variant="outlined" onPress={showSeveral}>
          Open five toasts
        </Button>
        <Button variant="ghost" onPress={dismiss}>
          Dismiss all
        </Button>
      </View>
      <Portal>
        <ToastStoryContext.Provider value={configuration}>
          <OverlayProvider store={store}>
            <OverlayHost />
          </OverlayProvider>
        </ToastStoryContext.Provider>
      </Portal>
    </>
  );
});
