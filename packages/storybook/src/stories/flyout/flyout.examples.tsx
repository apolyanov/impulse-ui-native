import { memo } from "react";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";
import { FlyoutPreview } from "./flyout-preview";

interface FlyoutExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  placement: "top" | "bottom";
  compound?: boolean;
  scrollable?: boolean;
  keyboardAware?: boolean;
}

export const FlyoutExampleDefinitions = [
  {
    name: "KeyboardAwareTop",
    title: "Keyboard-aware top flyout",
    description:
      "The sheet stays attached to the top edge while the body reserves overlapping keyboard space. Focus reveal adds space.sm clearance to keep the input border visible. Toggle field count and close while the keyboard is visible.",
    props: [],
    placement: "top",
    keyboardAware: true,
  },
  {
    name: "Scrollable",
    title: "Scrollable body",
    description:
      "Flyout.ScrollView is a direct child. The header and handle stay fixed while the body scrolls. Toggle field count to check resizing and dismissal geometry.",
    props: [],
    placement: "bottom",
    scrollable: true,
  },
  {
    name: "KeyboardAware",
    title: "Keyboard-aware body",
    description:
      "Flyout.KeyboardAwareView reserves keyboard space inside the body. The sheet stays attached to the bottom edge and can grow upward. Focus reveal adds space.sm clearance below the input. Check focused fields and dismissal with the native keyboard open.",
    props: [],
    placement: "bottom",
    keyboardAware: true,
  },
  {
    name: "CompoundBottom",
    title: "Compound bottom flyout",
    description:
      "Root owns the sheet lifecycle; Header, Title, Content, and Handle define the supplied presentation.",
    props: [],
    placement: "bottom",
    compound: true,
  },
  {
    name: "CompoundTop",
    title: "Compound top flyout",
    description:
      "Handle inherits placement from Root. Keep the Portal mounted around Root.",
    props: [],
    placement: "top",
    compound: true,
  },
  {
    name: "Bottom",
    title: "Bottom flyout",
    description:
      "Use a bottom flyout for contextual actions and controls that should remain thumb-friendly.",
    props: [
      {
        name: "placement",
        value: "bottom",
        description: "Animates the sheet from the bottom edge.",
      },
      {
        name: "open",
        value: "boolean",
        description: "Controls the flyout lifecycle.",
      },
    ],
    placement: "bottom",
  },
  {
    name: "Top",
    title: "Top flyout",
    description:
      "Use a top flyout when content should remain visually anchored to the upper edge.",
    props: [
      {
        name: "placement",
        value: "top",
        description: "Animates the sheet from the top edge.",
      },
    ],
    placement: "top",
  },
] satisfies FlyoutExampleDefinition[];

interface FlyoutExampleProps {
  example: FlyoutExampleDefinition;
  elevated?: boolean;
}

export const FlyoutExample = memo(function FlyoutExample({
  example,
  elevated,
}: FlyoutExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <FlyoutPreview
        placement={example.placement}
        compound={example.compound}
        scrollable={example.scrollable}
        keyboardAware={example.keyboardAware}
      />
    </StoryExample>
  );
});
