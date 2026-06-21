import type { Meta, StoryObj } from "@storybook/react";

import { createStoryDescription } from "@impulse-ui-native/storybook";
import { Pressable } from "@impulse-ui-native/toolkit";

import { PressableDocumentation } from "./pressable.documentation";
import {
  PressableExample,
  PressableExampleDefinitions,
} from "./pressable.examples";

const meta = {
  title: "Components/Pressable",
  component: Pressable,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled opacity styling.",
    },
    pressedStyle: {
      control: false,
      description: "Style applied only while the pressable is being pressed.",
    },
    style: {
      control: false,
      description:
        "Base style or state callback style for the pressable surface.",
    },
    children: {
      control: false,
      description: "The content rendered inside the pressable surface.",
    },
    shadow: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Applies a themed shadow style to the pressable surface.",
    },
    shadowPosition: {
      control: "select",
      options: ["top", "bottom"],
      description: "Controls the direction of the themed shadow.",
    },
  },
} satisfies Meta<typeof Pressable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <PressableDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Pressable states, styling, pressed feedback, and composition patterns.",
  ),
};

export const Default: Story = createPressableStory("Default");
export const Filled: Story = createPressableStory("Filled");
export const Outlined: Story = createPressableStory("Outlined");
export const PressedStyle: Story = createPressableStory("PressedStyle");
export const Disabled: Story = createPressableStory("Disabled");
export const Shadow: Story = createPressableStory("Shadow");
export const FullWidth: Story = createPressableStory("FullWidth");

function createPressableStory(name: string): Story {
  const example = PressableExampleDefinitions.find(
    function findPressableExample(item) {
      return item.name === name;
    },
  );

  if (!example) {
    throw new Error(`Pressable story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderPressableStory(args) {
      return (
        <PressableExample
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
