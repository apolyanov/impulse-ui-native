import { useMemo } from "react";

import {
  useOverlayLifecycle,
  useOverlaySpring,
} from "@impulse-ui-native/overlay";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ModalLifecycleProps } from "../types";

export function useModalLifecycle(props: ModalLifecycleProps) {
  const tokens = useComponentsTokens().modal;
  const { options, progress } = useOverlaySpring(tokens);
  const lifecycle = useOverlayLifecycle(props, options);

  return useMemo(() => ({ ...lifecycle, progress }), [lifecycle, progress]);
}
