import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from "@impulse-ui-native/color-picker";
import {
  ComponentSizeOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { ColorPickerCompositionExample } from "./color-picker-composition.example";
import { ColorPickerPerformanceExample } from "./color-picker-performance.example";
import { ColorPickerScrollExample } from "./color-picker-scroll.example";
import { ColorPickerDocumentation } from "./color-picker.documentation";
import { ColorPickerExample } from "./color-picker.examples";
import { ColorPickerExampleDefinitions } from "./constants/color-picker.constants";

const meta = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  args: {
    size: "medium",
    disabled: false,
    showAlpha: true,
    showPresets: true,
    commitMode: "immediate",
  },
  argTypes: {
    value: { control: "text", description: "Controlled hex color." },
    defaultValue: {
      control: "text",
      description: "Initial uncontrolled hex color; defaults to theme primary.",
    },
    onChange: { control: false, description: "Emits canonical hex colors." },
    size: { control: "select", options: ComponentSizeOptions },
    commitMode: { control: "select", options: ["immediate", "confirm"] },
    disabled: { control: "boolean" },
    showAlpha: { control: "boolean" },
    showPresets: { control: "boolean" },
    presets: { control: "object" },
    presetsLabel: {
      control: "text",
      description: 'Preset palette label; defaults to "Theme colors".',
    },
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ColorPickerDocumentation />;
  },
};
export const Default: Story = createColorPickerStory("Default");
export const Confirmation: Story = createColorPickerStory("Confirmation");
export const Controlled: Story = createColorPickerStory("Controlled");
export const Small: Story = createColorPickerStory("Small");
export const Large: Story = createColorPickerStory("Large");
export const Disabled: Story = createColorPickerStory("Disabled");
export const Alpha: Story = createColorPickerStory("Alpha");
export const WithoutAlpha: Story = createColorPickerStory("WithoutAlpha");
export const CustomPresets: Story = createColorPickerStory("CustomPresets");
export const NoPresets: Story = createColorPickerStory("NoPresets");
export const Dark: Story = createColorPickerStory("Dark");
export const Composition: Story = {
  render: function renderComposition() {
    return <ColorPickerCompositionExample />;
  },
};
export const NestedScrolling: Story = {
  render: function renderNestedScrolling() {
    return <ColorPickerScrollExample />;
  },
};

export const FrameTiming: Story = {
  render: function renderFrameTiming() {
    return <ColorPickerPerformanceExample />;
  },
};

function createColorPickerStory(name: string): Story {
  const example = ColorPickerExampleDefinitions.find(
    (item) => item.name === name,
  );

  if (!example) {
    throw new Error("Missing ColorPicker story: " + name);
  }

  return {
    args: example.args,
    render: function renderColorPicker(args) {
      return <ColorPickerExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
