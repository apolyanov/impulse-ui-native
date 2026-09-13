import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@impulse-ui-native/select";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { SelectDocumentation } from "./select.documentation";
import { SelectExample, SelectExampleDefinitions } from "./select.examples";

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    options: [],
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <SelectDocumentation />;
  },
};

export const Single: Story = createSelectStory("Single");
export const Multiple: Story = createSelectStory("Multiple");
export const Loading: Story = createSelectStory("Loading");

function createSelectStory(name: string): Story {
  const example = SelectExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Select story "${name}" was not found.`);
  }

  return {
    render: function renderSelectStory() {
      return <SelectExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
