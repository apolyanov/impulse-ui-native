import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "@impulse-ui-native/primitives";
import {
  ComponentSizeOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { ProgressDocumentation } from "./progress.documentation";
import {
  ProgressExample,
  ProgressExampleDefinitions,
} from "./progress.examples";

const ProgressVariantOptions = ["linear", "circular"] as const;
const ProgressToneOptions = [
  "primary",
  "secondary",
  "neutral",
  "inverse",
] as const;

const meta = {
  title: "Components/Progress",
  component: Progress,
  args: {
    accessibilityLabel: "Task progress",
    max: 100,
    min: 0,
    size: "medium",
    tone: "primary",
    value: 65,
    variant: "linear",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ProgressVariantOptions,
      description: "Selects the linear or circular presentation.",
    },
    value: {
      control: "number",
      description:
        "Sets determinate progress. Omit it for indeterminate progress.",
    },
    min: {
      control: "number",
      description: "Sets the beginning of the determinate range.",
    },
    max: {
      control: "number",
      description: "Sets the end of the determinate range.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls track thickness or circular dimensions.",
    },
    tone: {
      control: "select",
      options: ProgressToneOptions,
      description: "Selects semantic indicator and track colors.",
    },
    color: {
      control: "color",
      description: "Overrides the indicator color.",
    },
    trackColor: {
      control: "color",
      description: "Overrides the track color.",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ProgressDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for determinate and indeterminate linear and circular progress.",
  ),
};

export const LinearDeterminate: Story =
  createProgressStory("LinearDeterminate");
export const LinearIndeterminate: Story = createProgressStory(
  "LinearIndeterminate",
);
export const CircularDeterminate: Story = createProgressStory(
  "CircularDeterminate",
);
export const CircularIndeterminate: Story = createProgressStory(
  "CircularIndeterminate",
);
export const Small: Story = createProgressStory("Small");
export const Large: Story = createProgressStory("Large");
export const Inverse: Story = createProgressStory("Inverse");
export const CustomColors: Story = createProgressStory("CustomColors");
export const CustomRange: Story = createProgressStory("CustomRange");

function createProgressStory(name: string): Story {
  const example = ProgressExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Progress story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderStory(args) {
      return <ProgressExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
