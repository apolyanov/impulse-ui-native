import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "@impulse-ui-native/segmented-control";
import {
  ComponentSizeOptions,
  createStoryDescription,
  SelectionVariantOptions,
} from "@impulse-ui-native/storybook";

import { SegmentedControlDocumentation } from "./segmented-control.documentation";
import {
  SegmentedControlExample,
  SegmentedControlExampleDefinitions,
} from "./segmented-control.examples";

const meta = {
  title: "Components/Segmented Control",
  component: SegmentedControl.Root,
  args: {
    defaultValue: "week",
    disabled: false,
    overflow: "scroll",
    size: "medium",
    variant: "filled",
  },
  argTypes: {
    value: {
      control: "text",
      description: "Controls the selected item value.",
    },
    defaultValue: {
      control: "text",
      description: "Sets the initial value for uncontrolled usage.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls group height, item width, type, and icon size.",
    },
    variant: {
      control: "select",
      options: SelectionVariantOptions,
      description: "Controls the selected-item visual treatment.",
    },
    overflow: {
      control: "select",
      options: ["scroll", "clip"],
      description: "Controls behavior when the items exceed the group width.",
    },
    disabled: {
      control: "boolean",
      description: "Disables every item in the group.",
    },
    onValueChange: {
      control: false,
      description: "Called with the next selected value.",
    },
  },
} satisfies Meta<typeof SegmentedControl.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <SegmentedControlDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for segmented-control content, variants, sizes, disabled states, controlled state, accessibility, and overflow.",
  ),
};

export const Default: Story = createSegmentedControlStory("Default");
export const IconsAndLabels: Story =
  createSegmentedControlStory("IconsAndLabels");
export const IconOnly: Story = createSegmentedControlStory("IconOnly");
export const Filled: Story = createSegmentedControlStory("Filled");
export const Outlined: Story = createSegmentedControlStory("Outlined");
export const Soft: Story = createSegmentedControlStory("Soft");
export const Small: Story = createSegmentedControlStory("Small");
export const Medium: Story = createSegmentedControlStory("Medium");
export const Large: Story = createSegmentedControlStory("Large");
export const DisabledOption: Story =
  createSegmentedControlStory("DisabledOption");
export const DisabledGroup: Story =
  createSegmentedControlStory("DisabledGroup");
export const Controlled: Story = createSegmentedControlStory("Controlled");
export const Overflow: Story = createSegmentedControlStory("Overflow");

function createSegmentedControlStory(name: string): Story {
  const example = SegmentedControlExampleDefinitions.find(
    (item) => item.name === name,
  );

  if (!example) {
    throw new Error(`Segmented-control story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderSegmentedControlStory(args) {
      return <SegmentedControlExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
