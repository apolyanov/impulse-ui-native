import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@impulse-ui-native/slider";
import {
  ComponentSizeOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { SliderDocumentation } from "./slider.documentation";
import { SliderExample, SliderExampleDefinitions } from "./slider.examples";

const sliderVariantOptions = ["filled", "outlined", "soft"] as const;

const meta = {
  title: "Components/Slider",
  component: Slider,
  args: {
    accessibilityLabel: "Slider",
    defaultValue: 60,
    disabled: false,
    max: 100,
    min: 0,
    showMinMax: true,
    showValueBubble: true,
    size: "medium",
    step: 1,
    variant: "filled",
  },
  argTypes: {
    value: {
      control: "number",
      description: "Controls the selected value.",
    },
    defaultValue: {
      control: "number",
      description: "Sets the initial value for uncontrolled usage.",
    },
    min: {
      control: "number",
      description: "Sets the minimum selectable value.",
    },
    max: {
      control: "number",
      description: "Sets the maximum selectable value.",
    },
    step: {
      control: "number",
      description: "Sets the increment used for snapping and keyboard input.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls track, thumb, mark, and hit-target geometry.",
    },
    variant: {
      control: "select",
      options: sliderVariantOptions,
      description: "Controls the active track and thumb treatment.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    showMinMax: {
      control: "boolean",
      description: "Shows formatted minimum and maximum labels.",
    },
    showMarkLabels: {
      control: "boolean",
      description: "Shows a formatted label below each explicit mark.",
    },
    showValueBubble: {
      control: "boolean",
      description: "Shows the formatted current value above the thumb.",
    },
    onValueChange: {
      control: false,
      description:
        "Called whenever gesture, keyboard, or accessibility input changes the value.",
    },
    onSlidingStart: {
      control: false,
      description: "Called when a track gesture begins.",
    },
    onSlidingComplete: {
      control: false,
      description:
        "Called when a gesture or discrete keyboard adjustment completes.",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <SliderDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Slider and RangeSlider sizes, variants, marks, state models, gestures, keyboard input, and accessibility.",
  ),
};

export const Continuous: Story = createSliderStory("Continuous");
export const Range: Story = createSliderStory("Range");
export const Small: Story = createSliderStory("Small");
export const Medium: Story = createSliderStory("Medium");
export const Large: Story = createSliderStory("Large");
export const Filled: Story = createSliderStory("Filled");
export const Outlined: Story = createSliderStory("Outlined");
export const Soft: Story = createSliderStory("Soft");
export const StepsAndMarks: Story = createSliderStory("StepsAndMarks");
export const RangeStepsAndMarks: Story =
  createSliderStory("RangeStepsAndMarks");
export const Disabled: Story = createSliderStory("Disabled");
export const Controlled: Story = createSliderStory("Controlled");
export const ControlledRange: Story = createSliderStory("ControlledRange");

function createSliderStory(name: string): Story {
  const example = SliderExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Slider story "${name}" was not found.`);
  }

  return {
    render: function renderSliderStory() {
      return <SliderExample example={example} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
