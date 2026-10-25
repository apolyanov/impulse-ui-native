import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@impulse-ui-native/primitives";
import {
  ActionVariantOptions,
  ButtonToneOptions,
  ComponentSizeOptions,
  createStoryDescription,
  DisplayVariantOptions,
} from "@impulse-ui-native/storybook";

import { ButtonAppearanceExample } from "./button-appearance-example";
import { ButtonDocumentation } from "./button.documentation";
import { ButtonExample, ButtonExampleDefinitions } from "./button.examples";
import { VariantTonePaletteExample } from "./variant-tone-palette-example";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    size: "medium",
    variant: "filled",
    tone: "primary",
    disabled: false,
    loading: false,
  },
  argTypes: {
    tone: {
      control: "select",
      options: ButtonToneOptions,
      description:
        "Selects the neutral, primary, or secondary action palette. Defaults to primary.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the button height, padding, and text size.",
    },
    variant: {
      control: "select",
      options: ActionVariantOptions,
      description: "Controls the button visual emphasis and styling.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    loading: {
      control: "boolean",
      description:
        "Replaces the content with a loading indicator and prevents interaction.",
    },
    children: {
      control: "text",
      description: "The visible button label or custom button content.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AppearanceMatrix: Story = {
  render: function renderAppearanceMatrix(args) {
    return (
      <ButtonAppearanceExample
        size={args.size}
        disabled={args.disabled}
        loading={args.loading}
      />
    );
  },
  parameters: createStoryDescription(
    "All variant/tone combinations for Button and IconButton. Use size, disabled, and loading controls to compare states.",
  ),
};

export const SharedPalette: Story = {
  args: { tone: "primary", variant: "soft" },
  argTypes: { variant: { options: DisplayVariantOptions } },
  render: function renderSharedPalette(args) {
    const variant =
      args.variant === "ghost" ? "soft" : (args.variant ?? "soft");
    const tone = args.tone ?? "primary";

    return <VariantTonePaletteExample tone={tone} variant={variant} />;
  },
  parameters: createStoryDescription(
    "Compare the same enabled variant/tone palette across buttons, display components, selection controls, fields, and sliders.",
  ),
};

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ButtonDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Button variants, sizes, states, and recommended usage patterns.",
  ),
};

export const Neutral: Story = createButtonStory("Neutral");
export const Secondary: Story = createButtonStory("Secondary");

export const Filled: Story = createButtonStory("Filled");
export const Outlined: Story = createButtonStory("Outlined");
export const Soft: Story = createButtonStory("Soft");
export const Ghost: Story = createButtonStory("Ghost");
export const Small: Story = createButtonStory("Small");
export const Medium: Story = createButtonStory("Medium");
export const Large: Story = createButtonStory("Large");
export const Disabled: Story = createButtonStory("Disabled");
export const Loading: Story = createButtonStory("Loading");

function createButtonStory(name: string): Story {
  const example = ButtonExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Button story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderStory(args) {
      return <ButtonExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
