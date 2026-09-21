import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@impulse-ui-native/primitives";
import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { BadgeDocumentation } from "./badge.documentation";
import { BadgeExample, BadgeExampleDefinitions } from "./badge.examples";

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: {
    children: "Paid",
    size: "medium",
    tone: "success",
    variant: "filled",
  },
  argTypes: {
    children: {
      control: "text",
      description: "The badge label or custom content.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Applies the same visual variant axis as controls.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the badge height, type, and spacing.",
    },
    tone: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "neutral",
        "error",
        "warning",
        "success",
        "info",
      ],
      description: "Applies a semantic badge color.",
    },
    PrefixIcon: {
      control: false,
      description: "Optional themed icon rendered before the label.",
    },
    Prefix: {
      control: false,
      description: "Optional custom component rendered before the label.",
    },
    SuffixIcon: {
      control: false,
      description: "Optional themed icon rendered after the label.",
    },
    Suffix: {
      control: false,
      description: "Optional custom component rendered after the label.",
    },
    onPressPrefix: {
      control: false,
      description: "Makes the prefix addon pressable.",
    },
    onPressSuffix: {
      control: false,
      description: "Makes the suffix addon pressable.",
    },
    color: {
      control: "color",
      description: "Overrides the badge text color.",
    },
    backgroundColor: {
      control: "color",
      description: "Overrides the semantic background color.",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <BadgeDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for compact semantic badges, variants, and Input-style addons.",
  ),
};

export const Filled: Story = createBadgeStory("Filled");
export const Outlined: Story = createBadgeStory("Outlined");
export const Soft: Story = createBadgeStory("Soft");
export const Affixes: Story = createBadgeStory("Affixes");
export const Small: Story = createBadgeStory("Small");
export const Large: Story = createBadgeStory("Large");
export const SemanticTones: Story = createBadgeStory("Semantic tones");

function createBadgeStory(name: string): Story {
  const example = BadgeExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Badge story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderStory(args) {
      return <BadgeExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
