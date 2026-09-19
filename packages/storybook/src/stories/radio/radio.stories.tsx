import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "@impulse-ui-native/radio";
import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { RadioDocumentation } from "./radio.documentation";
import { RadioExample, RadioExampleDefinitions } from "./radio.examples";

const meta = {
  title: "Components/Radio",
  component: Radio,
  args: {
    accessibilityLabel: "Radio",
    defaultChecked: false,
    disabled: false,
    size: "medium",
    variant: "filled",
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "Controls whether the radio is selected.",
    },
    defaultChecked: {
      control: "boolean",
      description: "Sets the initial state for uncontrolled usage.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the radio and indicator dimensions.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Controls the selected-state visual treatment.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    onCheckedChange: {
      control: false,
      description: "Called with true when the radio is selected.",
    },
    onPress: {
      control: false,
      description: "Called with the native press event after selection.",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <RadioDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Radio states, variants, sizes, accessibility, and controlled behavior.",
  ),
};

export const Unchecked: Story = createRadioStory("Unchecked");
export const Checked: Story = createRadioStory("Checked");
export const Filled: Story = createRadioStory("Filled");
export const Outlined: Story = createRadioStory("Outlined");
export const Soft: Story = createRadioStory("Soft");
export const Ghost: Story = createRadioStory("Ghost");
export const Plain: Story = createRadioStory("Plain");
export const Small: Story = createRadioStory("Small");
export const Medium: Story = createRadioStory("Medium");
export const Large: Story = createRadioStory("Large");
export const Disabled: Story = createRadioStory("Disabled");
export const Controlled: Story = createRadioStory("Controlled");

function createRadioStory(name: string): Story {
  const example = RadioExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Radio story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderRadioStory(args) {
      return <RadioExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
