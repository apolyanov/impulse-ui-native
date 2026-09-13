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
        <Skeleton.Bone width={48} height={48} borderRadius={24} />
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
