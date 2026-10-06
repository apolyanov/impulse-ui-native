import { memo, useContext, useMemo } from "react";

import type { OverlayComponentProps } from "@impulse-ui-native/overlay";
import { Toast } from "@impulse-ui-native/toast";

import { ToastStoryContext } from "./toast-story.context";

export const ToastStoryOverlay = memo(function ToastStoryOverlay(
  props: OverlayComponentProps,
) {
  const configuration = useContext(ToastStoryContext);
  const { disabled, ...toastProps } = configuration;
  const actionProps = useMemo(() => ({ disabled }), [disabled]);

  return (
    <Toast {...props} {...toastProps} action="Undo" actionProps={actionProps} />
  );
});
