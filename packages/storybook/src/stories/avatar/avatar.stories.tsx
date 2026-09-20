import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@impulse-ui-native/primitives";
import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { AvatarDocumentation } from "./avatar.documentation";
import { AvatarExample, AvatarExampleDefinitions } from "./avatar.examples";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    initials: "AK",
    size: "medium",
    variant: "filled",
  },
  argTypes: {
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the avatar and status indicator dimensions.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Controls the avatar's visual emphasis.",
    },
    status: {
      control: "select",
      options: ["online", "offline", "away", "busy"],
      description: "Displays a semantic presence indicator.",
    },
    statusColor: {
      control: "color",
      description: "Overrides the semantic status color.",
    },
    source: { control: false },
    fallback: { control: false },
    imageProps: { control: false },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <AvatarDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Avatar images, fallbacks, sizes, and presence states.",
  ),
};

export const Image: Story = createAvatarStory("Image");
export const Initials: Story = createAvatarStory("Initials");
export const CustomFallback: Story = createAvatarStory("CustomFallback");
export const Filled: Story = createAvatarStory("Filled");
export const Outlined: Story = createAvatarStory("Outlined");
export const Soft: Story = createAvatarStory("Soft");
export const Ghost: Story = createAvatarStory("Ghost");
export const Plain: Story = createAvatarStory("Plain");
export const Small: Story = createAvatarStory("Small");
export const Medium: Story = createAvatarStory("Medium");
export const Large: Story = createAvatarStory("Large");
export const Online: Story = createAvatarStory("Online");
export const Away: Story = createAvatarStory("Away");
export const Busy: Story = createAvatarStory("Busy");
export const Offline: Story = createAvatarStory("Offline");

function createAvatarStory(name: string): Story {
  const example = AvatarExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Avatar story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderStory(args) {
      return <AvatarExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
