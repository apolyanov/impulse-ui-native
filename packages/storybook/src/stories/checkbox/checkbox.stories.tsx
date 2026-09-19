import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@impulse-ui-native/checkbox";
import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { CheckboxDocumentation } from "./checkbox.documentation";
import {
  CheckboxExample,
  CheckboxExampleDefinitions,
} from "./checkbox.examples";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    accessibilityLabel: "Checkbox",
    defaultChecked: false,
    disabled: false,
    size: "medium",
    variant: "filled",
  },
  argTypes: {
    checked: {
      control: "select",
      options: [undefined, false, true, "indeterminate"],
      description: "Controls the checked, unchecked, or mixed state.",
    },
    defaultChecked: {
      control: "select",
      options: [false, true, "indeterminate"],
      description: "Sets the initial state for uncontrolled usage.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the checkbox and indicator dimensions.",
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
      description: "Called with the next state after the checkbox is pressed.",
    },
    onPress: {
      control: false,
      description: "Called with the native press event after a state change.",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <CheckboxDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Checkbox states, variants, sizes, accessibility, and controlled behavior.",
  ),
};

export const Unchecked: Story = createCheckboxStory("Unchecked");
export const Checked: Story = createCheckboxStory("Checked");
export const Indeterminate: Story = createCheckboxStory("Indeterminate");
export const Filled: Story = createCheckboxStory("Filled");
export const Outlined: Story = createCheckboxStory("Outlined");
export const Soft: Story = createCheckboxStory("Soft");
export const Ghost: Story = createCheckboxStory("Ghost");
export const Plain: Story = createCheckboxStory("Plain");
export const Small: Story = createCheckboxStory("Small");
export const Medium: Story = createCheckboxStory("Medium");
export const Large: Story = createCheckboxStory("Large");
export const Disabled: Story = createCheckboxStory("Disabled");
export const Controlled: Story = createCheckboxStory("Controlled");

function createCheckboxStory(name: string): Story {
  const example = CheckboxExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Checkbox story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderCheckboxStory(args) {
      return <CheckboxExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
