import { useMemo } from "react";

import { useOverlayLifecycle, useOverlayTiming } from "@impulse-ui-native/overlay";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ModalLifecycleProps } from "../types";

export function useModalLifecycle(props: ModalLifecycleProps) {
  const tokens = useComponentsTokens().modal;
  const { options, progress } = useOverlayTiming(tokens);
  const lifecycle = useOverlayLifecycle(props, options);

  return useMemo(() => ({ ...lifecycle, progress }), [lifecycle, progress]);
}
