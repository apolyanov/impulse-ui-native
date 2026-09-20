import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "@impulse-ui-native/primitives";
import {
  ComponentSizeOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { SpinnerDocumentation } from "./spinner.documentation";
import { SpinnerExample, SpinnerExampleDefinitions } from "./spinner.examples";

const SpinnerToneOptions = [
  "primary",
  "secondary",
  "neutral",
  "inverse",
] as const;

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  args: {
    animating: true,
    size: "medium",
    tone: "primary",
  },
  argTypes: {
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the indicator's token-aware visual size.",
    },
    tone: {
      control: "select",
      options: SpinnerToneOptions,
      description: "Selects a semantic color from the active theme.",
    },
    color: {
      control: "color",
      description: "Overrides the semantic tone with an explicit color.",
    },
    animating: {
      control: "boolean",
      description: "Controls whether the native indicator is animating.",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <SpinnerDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Spinner sizes, semantic tones, and contextual color overrides.",
  ),
};

export const Small: Story = createSpinnerStory("Small");
export const Medium: Story = createSpinnerStory("Medium");
export const Large: Story = createSpinnerStory("Large");
export const Primary: Story = createSpinnerStory("Primary");
export const Secondary: Story = createSpinnerStory("Secondary");
export const Neutral: Story = createSpinnerStory("Neutral");
export const Inverse: Story = createSpinnerStory("Inverse");
export const CustomColor: Story = createSpinnerStory("CustomColor");

function createSpinnerStory(name: string): Story {
  const example = SpinnerExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Spinner story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderStory(args) {
      return <SpinnerExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
