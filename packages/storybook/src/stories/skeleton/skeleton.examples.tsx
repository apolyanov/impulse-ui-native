import type { ReactNode } from "react";
import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";
import { SkeletonActionsAndChoicesPreview } from "./skeleton-actions-and-choices-preview";
import { SkeletonCardPreview } from "./skeleton-card-preview";
import { SkeletonFieldsPreview } from "./skeleton-fields-preview";
import { SkeletonNavigationAndFeedbackPreview } from "./skeleton-navigation-and-feedback-preview";
import { SkeletonProfilePreview } from "./skeleton-profile-preview";

interface SkeletonExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
}

export const SkeletonExampleDefinitions = [
  {
    name: "Profile",
    title: "Profile placeholder",
    description:
      "Compose bones and text placeholders to preserve a profile layout while data loads.",
    props: [
      {
        name: "Skeleton.Container",
        value: "gap={12}",
        description: "Groups placeholders with themed layout props.",
      },
    ],
    preview: <SkeletonProfilePreview />,
  },
  {
    name: "Card",
    title: "Card placeholder",
    description:
      "Combine rectangular bones, text, and tags for richer loading surfaces.",
    props: [
      {
        name: "Skeleton.Bone",
        value: "height={120}",
        description: "Represents the main card media area.",
      },
      {
        name: "Skeleton.Tag",
        value: 'size="small"',
        description: "Represents compact metadata or status content.",
      },
    ],
    preview: <SkeletonCardPreview />,
  },
  {
    name: "ActionsAndChoices",
    title: "Actions and choices",
    description:
      "Token-matched presets preserve the geometry of actions, identity, metadata, and choice controls.",
    props: [
      {
        name: "size",
        value: "small | medium | large",
        description: "Matches the corresponding component size tokens.",
      },
    ],
    preview: <SkeletonActionsAndChoicesPreview />,
  },
  {
    name: "Fields",
    title: "Fields",
    description:
      "Control covers Input, Select, and date/time fields while Textarea preserves multiline height.",
    props: [
      {
        name: "rows",
        value: "3",
        description: "Sets the Textarea placeholder's visible row count.",
      },
    ],
    preview: <SkeletonFieldsPreview />,
  },
  {
    name: "NavigationAndFeedback",
    title: "Navigation and feedback",
    description:
      "Higher-level presets reserve stable space for progress, sliders, segmented choices, and pagination.",
    props: [
      {
        name: "itemCount",
        value: "3 | 5",
        description:
          "Controls the reserved width for SegmentedControl and Pagination.",
      },
    ],
    preview: <SkeletonNavigationAndFeedbackPreview />,
  },
] satisfies SkeletonExampleDefinition[];

interface SkeletonExampleProps {
  example: SkeletonExampleDefinition;
  elevated?: boolean;
}

export const SkeletonExample = memo(function SkeletonExample({
  example,
  elevated,
}: SkeletonExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View>{example.preview}</View>
    </StoryExample>
  );
});
