import type { Meta, StoryObj } from "@storybook/react";

import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";
import { Button } from "@impulse-ui-native/toolkit";

import { ButtonDocumentation } from "./button.documentation";
import { ButtonExample, ButtonExampleDefinitions } from "./button.examples";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    size: "medium",
    variant: "filled",
    disabled: false,
    loading: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the button height, padding, and text size.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Controls the button visual emphasis and styling.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    loading: {
      control: "boolean",
      description: "Replaces the button content with a loading indicator.",
    },
    children: {
      control: "text",
      description: "The visible button label or custom button content.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ButtonDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Button variants, sizes, states, and recommended usage patterns.",
  ),
};

export const Filled: Story = createButtonStory("Filled");
export const Outlined: Story = createButtonStory("Outlined");
export const Soft: Story = createButtonStory("Soft");
export const Ghost: Story = createButtonStory("Ghost");
export const Plain: Story = createButtonStory("Plain");
export const Small: Story = createButtonStory("Small");
export const Medium: Story = createButtonStory("Medium");
export const Large: Story = createButtonStory("Large");
export const Disabled: Story = createButtonStory("Disabled");
export const Loading: Story = createButtonStory("Loading");

function createButtonStory(name: string): Story {
  const example = ButtonExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Button story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderStory() {
      return <ButtonExample example={example} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
