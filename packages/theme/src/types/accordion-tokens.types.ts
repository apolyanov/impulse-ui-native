import type { ControlVisualState } from "./components.types";

export interface AccordionTokens {
  animationDuration: number;
  backgroundColor: string;
  borderColor: string;
  borderRadius: number;
  borderWidth: number;
  content: {
    paddingBottom: number;
    paddingHorizontal: number;
  };
  dividerColor: string;
  dividerWidth: number;
  iconSize: number;
  trigger: {
    gap: number;
    minHeight: number;
    paddingHorizontal: number;
    paddingVertical: number;
    states: Record<
      ControlVisualState,
      {
        backgroundColor: string;
        iconColor: string;
        opacity: number;
        pressedOpacity: number;
        titleColor: string;
      }
    >;
  };
}
