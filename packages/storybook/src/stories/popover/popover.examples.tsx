import type { ComponentProps } from "react";
import { memo } from "react";

import { StoryExample } from "../../components/story-example";
import { PopoverPreview } from "./popover-preview";

interface PopoverExampleDefinition {
  name: string;
  description: string;
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
    description: "Prefer top, flipping when the opposite side has more room.",
    props: { placement: "top" },
  },
  {
    name: "Left",
    description: "Prefer the physical left side, respecting safe-area bounds.",
    props: { placement: "left" },
  },
  {
    name: "RightEdge",
    description:
      "A right-edge anchor forces a left flip or horizontal shift; the arrow stays aligned.",
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
      <PopoverPreview {...example.props} />
    </StoryExample>
  );
});
