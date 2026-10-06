import { createContext } from "react";

import type { ToastTone } from "@impulse-ui-native/theme";
import type { ToastPlacement } from "@impulse-ui-native/toast";

export const ToastStoryContext = createContext<{
  placement: ToastPlacement;
  tone: ToastTone;
  duration: number;
  disabled: boolean;
}>({ placement: "bottom", tone: "success", duration: 4000, disabled: false });
