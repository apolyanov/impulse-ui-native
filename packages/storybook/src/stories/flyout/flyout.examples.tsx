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
}

export const FlyoutExampleDefinitions = [
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
      "Pass the top placement to Root and Handle. Keep the Portal mounted around Root.",
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
      />
    </StoryExample>
  );
});
