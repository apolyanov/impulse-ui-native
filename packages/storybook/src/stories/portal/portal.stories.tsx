import type { Meta, StoryObj } from "@storybook/react";

import { Portal } from "@impulse-ui-native/portal";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { PortalDocumentation } from "./portal.documentation";
import { PortalExample, PortalExampleDefinitions } from "./portal.examples";

const meta = {
  title: "Components/Portal",
  component: Portal,
} satisfies Meta<typeof Portal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <PortalDocumentation />;
  },
};

export const RootHost: Story = createPortalStory("RootHost");
export const NamedHost: Story = createPortalStory("NamedHost");

function createPortalStory(name: string): Story {
  const example = PortalExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Portal story "${name}" was not found.`);
  }

  return {
    render: function renderPortalStory() {
      return <PortalExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
