import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@impulse-ui-native/skeleton";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { SkeletonDocumentation } from "./skeleton.documentation";
import {
  SkeletonExample,
  SkeletonExampleDefinitions,
} from "./skeleton.examples";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton.Container,
} satisfies Meta<typeof Skeleton.Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <SkeletonDocumentation />;
  },
};

export const Profile: Story = createSkeletonStory("Profile");
export const Card: Story = createSkeletonStory("Card");

function createSkeletonStory(name: string): Story {
  const example = SkeletonExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Skeleton story "${name}" was not found.`);
  }

  return {
    render: function renderSkeletonStory() {
      return <SkeletonExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
