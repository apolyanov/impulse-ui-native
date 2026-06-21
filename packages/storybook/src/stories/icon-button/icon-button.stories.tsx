import type { Meta, StoryObj } from "@storybook/react";

import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";
import { IconButton, SparkleIcon } from "@impulse-ui-native/toolkit";

import { IconButtonDocumentation } from "./icon-button.documentation";
import {
  IconButtonExample,
  IconButtonExampleDefinitions,
} from "./icon-button.examples";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    icon: SparkleIcon,
    size: "medium",
    variant: "filled",
    disabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description:
        "Controls the icon button width, height, padding, and icon size.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Controls the icon button visual emphasis and styling.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    icon: {
      control: false,
      description: "The icon rendered inside the icon button.",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <IconButtonDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for IconButton variants, sizes, states, and recommended usage patterns.",
  ),
};

export const Filled: Story = createIconButtonStory("Filled");
export const Outlined: Story = createIconButtonStory("Outlined");
export const Soft: Story = createIconButtonStory("Soft");
export const Ghost: Story = createIconButtonStory("Ghost");
export const Plain: Story = createIconButtonStory("Plain");
export const Small: Story = createIconButtonStory("Small");
export const Medium: Story = createIconButtonStory("Medium");
export const Large: Story = createIconButtonStory("Large");
export const Disabled: Story = createIconButtonStory("Disabled");

function createIconButtonStory(name: string): Story {
  const example = IconButtonExampleDefinitions.find(
    function findIconButtonExample(item) {
      return item.name === name;
    },
  );

  if (!example) {
    throw new Error(`IconButton story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderIconButtonStory() {
      return <IconButtonExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
