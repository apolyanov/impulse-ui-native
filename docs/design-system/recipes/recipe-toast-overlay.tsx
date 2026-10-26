import type { OverlayComponentProps } from "@impulse-ui-native/overlay";
import { Toast } from "@impulse-ui-native/toast";

export function RecipeToastOverlay(props: OverlayComponentProps) {
  return <Toast {...props} tone="success" duration={4000} />;
}
