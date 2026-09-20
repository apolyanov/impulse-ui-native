import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@impulse-ui-native/primitives";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { CardDocumentation } from "./card.documentation";
import { CardExample, CardExampleDefinitions } from "./card.examples";

const meta = {
  title: "Components/Card",
  component: Card.Root,
} satisfies Meta<typeof Card.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <CardDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for static, media, pressable, disabled, and custom-layout cards.",
  ),
};

export const Basic: Story = createCardStory("Basic");
export const Media: Story = createCardStory("Media");
export const Pressable: Story = createCardStory("Pressable");
export const Disabled: Story = createCardStory("Disabled");
export const Horizontal: Story = createCardStory("Horizontal");

function createCardStory(name: string): Story {
  const example = CardExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Card story "${name}" was not found.`);
  }

  return {
    render: function renderStory() {
      return <CardExample example={example} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
