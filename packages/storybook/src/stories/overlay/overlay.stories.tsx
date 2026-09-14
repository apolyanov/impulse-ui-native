import type { Meta, StoryObj } from "@storybook/react";

import { OverlayHost } from "@impulse-ui-native/overlay";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { OverlayDocumentation } from "./overlay.documentation";
import { OverlayExample, OverlayExampleDefinitions } from "./overlay.examples";

const meta = {
  title: "Components/Overlay",
  component: OverlayHost,
} satisfies Meta<typeof OverlayHost>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <OverlayDocumentation />;
  },
};

export const RegisteredFlyout: Story = createOverlayStory("RegisteredFlyout");

function createOverlayStory(name: string): Story {
  const example = OverlayExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Overlay story "${name}" was not found.`);
  }

  return {
    render: function renderOverlayStory() {
      return <OverlayExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
