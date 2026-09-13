import type { Meta, StoryObj } from "@storybook/react";

import { Flyout } from "@impulse-ui-native/flyout";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { FlyoutDocumentation } from "./flyout.documentation";
import { FlyoutExample, FlyoutExampleDefinitions } from "./flyout.examples";

const meta = {
  title: "Components/Flyout",
  component: Flyout,
  args: {
    id: "storybook-flyout",
  },
} satisfies Meta<typeof Flyout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <FlyoutDocumentation />;
  },
};

export const Bottom: Story = createFlyoutStory("Bottom");
export const Top: Story = createFlyoutStory("Top");

function createFlyoutStory(name: string): Story {
  const example = FlyoutExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Flyout story "${name}" was not found.`);
  }

  return {
    render: function renderFlyoutStory() {
      return <FlyoutExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
