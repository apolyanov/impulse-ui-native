import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@impulse-ui-native/icon/components/icon";
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { IconDocumentation } from "./icon.documentation";
import { IconExample, IconExampleDefinitions } from "./icon.examples";

const meta = {
  title: "Components/Icon",
  component: Icon,
  args: {
    icon: HeartIcon,
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <IconDocumentation />;
  },
};

export const Renderer: Story = createIconStory("Renderer");
export const Variants: Story = createIconStory("Variants");

function createIconStory(name: string): Story {
  const example = IconExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Icon story "${name}" was not found.`);
  }

  return {
    render: function renderIconStory() {
      return <IconExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
