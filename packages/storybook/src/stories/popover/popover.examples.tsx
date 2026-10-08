import type { ComponentProps } from "react";
import { memo } from "react";

import { StoryExample } from "../../components/story-example";
import { PopoverPlacementPreview } from "./popover-placement-preview";
import { PopoverPreview } from "./popover-preview";

interface PopoverExampleDefinition {
  name: string;
  description: string;
  preview?: "placement";
  props: ComponentProps<typeof PopoverPreview>;
}

export const PopoverExampleDefinitions: PopoverExampleDefinition[] = [
  {
    name: "Default",
    description:
      "The reference Project settings design: press the coral Visibility trigger, select Private or Team, then Apply. Closing without Apply discards the draft.",
    props: {},
  },
  {
    name: "Controlled",
    description:
      "The external button and Trigger request changes to the same controlled open state.",
    props: { controlled: true },
  },
  {
    name: "Disabled",
    description:
      "Disabled roots block presses and long-presses and suppress content.",
    props: { disabled: true },
  },
  {
    name: "Tooltip",
    description:
      "Long-press for an inverse-surface hint that dismisses after three seconds.",
    props: { tooltip: true },
  },
  {
    name: "LongPress",
    description:
      "Popover can use a long-press trigger while retaining interactive content.",
    props: { longPress: true },
  },
  {
    name: "Top",
    description:
      "A compact popover above a centered trigger with room on every side.",
    preview: "placement",
    props: { placement: "top" },
  },
  {
    name: "Bottom",
    description:
      "A compact popover below a centered trigger with room on every side.",
    preview: "placement",
    props: { placement: "bottom" },
  },
  {
    name: "Left",
    description:
      "A compact popover to the physical left of a centered trigger.",
    preview: "placement",
    props: { placement: "left" },
  },
  {
    name: "Right",
    description:
      "A compact popover to the physical right of a centered trigger.",
    preview: "placement",
    props: { placement: "right" },
  },
  {
    name: "RightEdge",
    description:
      "A right-edge anchor forces a left flip or horizontal shift to keep the panel within safe-area bounds.",
    preview: "placement",
    props: { placement: "right", edge: true },
  },
];

export const PopoverExample = memo(function PopoverExample({
  example,
}: {
  example: PopoverExampleDefinition;
}) {
  return (
    <StoryExample
      title={example.name}
      description={example.description}
      elevated
    >
      {example.preview === "placement" ? (
        <PopoverPlacementPreview {...example.props} />
      ) : (
        <PopoverPreview {...example.props} />
      )}
    </StoryExample>
  );
});
