import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "@impulse-ui-native/primitives";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { DividerDocumentation } from "./divider.documentation";
import { DividerExample, DividerExampleDefinitions } from "./divider.examples";

const meta = {
  title: "Components/Divider",
  component: Divider,
  args: {
    inset: "none",
    orientation: "horizontal",
    tone: "subtle",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Controls the divider's axis.",
    },
    inset: {
      control: "select",
      options: ["none", "start", "end", "both"],
      description: "Insets logical edges using the theme spacing token.",
    },
    tone: {
      control: "select",
      options: ["subtle", "default", "strong", "primary", "inverse"],
      description: "Selects a semantic divider color.",
    },
    color: {
      control: "color",
      description: "Overrides the semantic tone with an explicit color.",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <DividerDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Divider orientation, insets, and semantic tones.",
  ),
};

export const Horizontal: Story = createDividerStory("Horizontal");
export const Vertical: Story = createDividerStory("Vertical");
export const InsetStart: Story = createDividerStory("InsetStart");
export const InsetBoth: Story = createDividerStory("InsetBoth");
export const Default: Story = createDividerStory("Default");
export const Strong: Story = createDividerStory("Strong");
export const Primary: Story = createDividerStory("Primary");
export const Inverse: Story = createDividerStory("Inverse");
export const CustomColor: Story = createDividerStory("CustomColor");

function createDividerStory(name: string): Story {
  const example = DividerExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Divider story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderStory(args) {
      return <DividerExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
