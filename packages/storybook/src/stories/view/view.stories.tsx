import type { Meta, StoryObj } from "@storybook/react";

import { createStoryDescription } from "@impulse-ui-native/storybook";
import { View } from "@impulse-ui-native/toolkit";

import { ViewDocumentation } from "./view.documentation";
import { ViewExample, ViewExampleDefinitions } from "./view.examples";

const meta = {
  title: "Components/View",
  component: View,
  argTypes: {
    children: {
      control: false,
      description: "The content rendered inside the view.",
    },
    style: {
      control: false,
      description: "Regular React Native style override.",
    },
    shadow: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Applies a themed shadow style.",
    },
    shadowPosition: {
      control: "select",
      options: ["top", "bottom"],
      description: "Controls the direction of the themed shadow.",
    },
    padding: {
      control: "number",
      description: "Adds spacing inside the view.",
    },
    gap: {
      control: "number",
      description: "Adds spacing between child elements.",
    },
    borderRadius: {
      control: "number",
      description: "Rounds the view corners.",
    },
    backgroundColor: {
      control: "color",
      description: "Applies a background color.",
    },
  },
} satisfies Meta<typeof View>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ViewDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for View layout, spacing, surfaces, alignment, and shadow composition.",
  ),
};

export const Default: Story = createViewStory("Default");
export const Padding: Story = createViewStory("Padding");
export const Gap: Story = createViewStory("Gap");
export const Row: Story = createViewStory("Row");
export const SpaceBetween: Story = createViewStory("SpaceBetween");
export const Centered: Story = createViewStory("Centered");
export const Surface: Story = createViewStory("Surface");
export const Shadow: Story = createViewStory("Shadow");

function createViewStory(name: string): Story {
  const example = ViewExampleDefinitions.find(function findViewExample(item) {
    return item.name === name;
  });

  if (!example) {
    throw new Error(`View story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderViewStory() {
      return <ViewExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
