import type { Meta, StoryObj } from "@storybook/react";

import { LayerCenter } from "@impulse-ui-native/layers";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { LayersDocumentation } from "./layers.documentation";
import { LayersExample, LayersExampleDefinitions } from "./layers.examples";

const meta = {
  title: "Components/Layers",
  component: LayerCenter,
} satisfies Meta<typeof LayerCenter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <LayersDocumentation />;
  },
};

export const RegisteredFlyout: Story = createLayersStory("RegisteredFlyout");

function createLayersStory(name: string): Story {
  const example = LayersExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Layers story "${name}" was not found.`);
  }

  return {
    render: function renderLayersStory() {
      return <LayersExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
