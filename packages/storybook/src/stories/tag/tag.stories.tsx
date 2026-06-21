import type { Meta, StoryObj } from "@storybook/react";

import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";
import { Tag } from "@impulse-ui-native/toolkit";

import { TagDocumentation } from "./tag.documentation";
import { TagExample, TagExampleDefinitions } from "./tag.examples";

const TagColorOptions = [
  "primary",
  "secondary",
  "error",
  "warning",
  "success",
  "info",
];

const meta = {
  title: "Components/Tag",
  component: Tag,
  args: {
    label: "Tag",
    size: "medium",
    variant: "filled",
    color: "primary",
    closable: false,
    disabled: false,
  },
  argTypes: {
    label: {
      control: "text",
      description: "The visible text rendered inside the tag.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the tag height, padding, and text size.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Controls the tag visual emphasis and styling.",
    },
    color: {
      control: "select",
      options: TagColorOptions,
      description: "Controls the semantic color of the tag.",
    },
    closable: {
      control: "boolean",
      description: "Displays a close icon when onClose is provided.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    onClose: {
      control: false,
      description: "Called when the close icon is pressed.",
    },
    onPress: {
      control: false,
      description: "Called when the tag is pressed.",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <TagDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Tag variants, sizes, colors, states, and interaction patterns.",
  ),
};

export const Filled: Story = createTagStory("Filled");
export const Outlined: Story = createTagStory("Outlined");
export const Soft: Story = createTagStory("Soft");
export const Plain: Story = createTagStory("Plain");
export const Small: Story = createTagStory("Small");
export const Medium: Story = createTagStory("Medium");
export const Large: Story = createTagStory("Large");
export const Secondary: Story = createTagStory("Secondary");
export const Error: Story = createTagStory("Error");
export const Warning: Story = createTagStory("Warning");
export const Success: Story = createTagStory("Success");
export const Info: Story = createTagStory("Info");
export const Closable: Story = createTagStory("Closable");
export const Pressable: Story = createTagStory("Pressable");
export const Disabled: Story = createTagStory("Disabled");

function createTagStory(name: string): Story {
  const example = TagExampleDefinitions.find(function findTagExample(item) {
    return item.name === name;
  });

  if (!example) {
    return {
      args: {},
      render: undefined,
      parameters: {},
    };
  }

  return {
    args: example.args,
    render: function renderTagStory(args) {
      return (
        <TagExample
          example={{
            ...example,
            args,
          }}
        />
      );
    },
    parameters: createStoryDescription(example.description),
  };
}
