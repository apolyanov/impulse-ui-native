import type { Meta, StoryObj } from "@storybook/react";

import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";
import { Switch } from "@impulse-ui-native/switch";

import { SwitchDocumentation } from "./switch.documentation";
import { SwitchExample, SwitchExampleDefinitions } from "./switch.examples";

const meta = {
  title: "Components/Switch",
  component: Switch,
  args: {
    accessibilityLabel: "Switch",
    defaultChecked: false,
    disabled: false,
    loading: false,
    size: "medium",
    variant: "filled",
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "Controls whether the switch is on.",
    },
    defaultChecked: {
      control: "boolean",
      description: "Sets the initial state for uncontrolled usage.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description:
        "Controls the track, thumb, indicator, and hit target sizes.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Controls the on-state visual treatment.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    loading: {
      control: "boolean",
      description:
        "Marks the switch busy, shows an activity indicator, and prevents interaction.",
    },
    onCheckedChange: {
      control: false,
      description: "Called with the next on/off state after a press.",
    },
    onPress: {
      control: false,
      description:
        "Called with the native press event after the state changes.",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <SwitchDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Switch states, animation, variants, sizes, accessibility, and controlled behavior.",
  ),
};

export const Off: Story = createSwitchStory("Off");
export const On: Story = createSwitchStory("On");
export const Filled: Story = createSwitchStory("Filled");
export const Outlined: Story = createSwitchStory("Outlined");
export const Soft: Story = createSwitchStory("Soft");
export const Ghost: Story = createSwitchStory("Ghost");
export const Plain: Story = createSwitchStory("Plain");
export const Small: Story = createSwitchStory("Small");
export const Medium: Story = createSwitchStory("Medium");
export const Large: Story = createSwitchStory("Large");
export const Disabled: Story = createSwitchStory("Disabled");
export const Loading: Story = createSwitchStory("Loading");
export const Controlled: Story = createSwitchStory("Controlled");

function createSwitchStory(name: string): Story {
  const example = SwitchExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Switch story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderSwitchStory(args) {
      return <SwitchExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
