import type { ToastTone } from "@impulse-ui-native/theme";

export interface ToastActionThemeProps {
  tone: ToastTone;
  blocked: boolean | undefined;
}

export interface ToastIconThemeProps {
  tone: ToastTone;
}
