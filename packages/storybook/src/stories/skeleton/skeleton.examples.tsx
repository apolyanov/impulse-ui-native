import type { ReactNode } from "react";
import { memo } from "react";

import { Typography, View } from "@impulse-ui-native/primitives";
import { Skeleton } from "@impulse-ui-native/skeleton";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

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
    preview: (
      <Skeleton.Container flexDirection="row" alignItems="center" gap={12}>
        <Skeleton.Avatar size="large" />
        <Skeleton.Container flex={1} gap={8}>
          <Skeleton.Text
            text="Account holder name"
            Component={Typography.Body}
          />
          <Skeleton.Bone width="60%" height={12} borderRadius={6} />
        </Skeleton.Container>
      </Skeleton.Container>
    ),
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
    preview: (
      <Skeleton.Container gap={12}>
        <Skeleton.Bone width="100%" height={120} borderRadius={12} />
        <Skeleton.Text
          text="Loading card title"
          Component={Typography.Title5}
        />
        <Skeleton.Tag size="small" width={88} />
      </Skeleton.Container>
    ),
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
    preview: (
      <Skeleton.Container gap={12}>
        <Skeleton.Container flexDirection="row" alignItems="center" gap={8}>
          <Skeleton.Avatar />
          <Skeleton.Badge width={72} />
          <Skeleton.Tag size="medium" width={80} />
        </Skeleton.Container>
        <Skeleton.Container flexDirection="row" alignItems="center" gap={8}>
          <Skeleton.Button width={112} />
          <Skeleton.IconButton />
          <Skeleton.Checkbox />
          <Skeleton.Radio />
          <Skeleton.Switch />
        </Skeleton.Container>
      </Skeleton.Container>
    ),
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
    preview: (
      <Skeleton.Container gap={12}>
        <Skeleton.Control size="small" />
        <Skeleton.Control size="medium" />
        <Skeleton.Control size="large" />
        <Skeleton.Textarea rows={4} />
      </Skeleton.Container>
    ),
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
    preview: (
      <Skeleton.Container gap={16}>
        <Skeleton.Progress />
        <Skeleton.Container flexDirection="row" alignItems="center" gap={12}>
          <Skeleton.Progress variant="circular" />
          <Skeleton.Slider width={200} />
        </Skeleton.Container>
        <Skeleton.SegmentedControl itemCount={3} />
        <Skeleton.Pagination itemCount={5} />
        <Skeleton.Divider />
      </Skeleton.Container>
    ),
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
