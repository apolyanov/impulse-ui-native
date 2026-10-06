import { memo } from "react";

import type { ToastTone } from "@impulse-ui-native/theme";
import type { ToastPlacement } from "@impulse-ui-native/toast";

import { StoryExample } from "../../components/story-example";
import { ToastPreview } from "./toast-preview";

interface ToastExampleDefinition {
  name: string;
  description: string;
  placement: ToastPlacement;
  tone: ToastTone;
  duration: number;
  disabled?: boolean;
}

export const ToastExampleDefinitions: ToastExampleDefinition[] = [
  {
    name: "Bottom",
    description:
      "Safe-area-aware bottom placement with component-owned duration and overlay-owned open/close state.",
    placement: "bottom",
    tone: "success",
    duration: 4000,
  },
  {
    name: "Top",
    description:
      "Top placement uses the same overlay lifecycle and semantic information colors.",
    placement: "top",
    tone: "info",
    duration: 4000,
  },
  {
    name: "Persistent",
    description:
      "Zero duration keeps errors visible until Undo or Close is pressed.",
    placement: "bottom",
    tone: "error",
    duration: 0,
  },
  {
    name: "Warning",
    description:
      "Warning tone with a disabled action; Close remains available.",
    placement: "top",
    tone: "warning",
    duration: 8000,
    disabled: true,
  },
];

export const ToastExample = memo(function ToastExample({
  example,
  elevated,
}: {
  example: ToastExampleDefinition;
  elevated?: boolean;
}) {
  return (
    <StoryExample
      title={example.name + " toast"}
      description={example.description}
      elevated={elevated}
    >
      <ToastPreview
        placement={example.placement}
        tone={example.tone}
        duration={example.duration}
        disabled={example.disabled}
      />
    </StoryExample>
  );
});
