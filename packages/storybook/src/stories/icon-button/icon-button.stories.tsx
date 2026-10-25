import type { Meta, StoryObj } from "@storybook/react";

import { SparkleIcon } from "@impulse-ui-native/icon/icons/sparkle";
import { IconButton } from "@impulse-ui-native/primitives";
import {
  ActionVariantOptions,
  ButtonToneOptions,
  ComponentSizeOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { ButtonAppearanceExample } from "../button/button-appearance-example";
import { IconButtonDocumentation } from "./icon-button.documentation";
import {
  IconButtonExample,
  IconButtonExampleDefinitions,
} from "./icon-button.examples";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  args: {
    icon: SparkleIcon,
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
      description:
        "Controls the icon button width, height, padding, and icon size.",
    },
    variant: {
      control: "select",
      options: ActionVariantOptions,
      description: "Controls the icon button visual emphasis and styling.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    loading: {
      control: "boolean",
      description:
        "Replaces the icon with a loading indicator and prevents interaction.",
    },
    icon: {
      control: false,
      description: "The icon rendered inside the icon button.",
    },
  },
} satisfies Meta<typeof IconButton>;

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

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <IconButtonDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for IconButton variants, sizes, states, and recommended usage patterns.",
  ),
};

export const Neutral: Story = createIconButtonStory("Neutral");
export const Secondary: Story = createIconButtonStory("Secondary");

export const Filled: Story = createIconButtonStory("Filled");
export const Outlined: Story = createIconButtonStory("Outlined");
export const Soft: Story = createIconButtonStory("Soft");
export const Ghost: Story = createIconButtonStory("Ghost");
export const Small: Story = createIconButtonStory("Small");
export const Medium: Story = createIconButtonStory("Medium");
export const Large: Story = createIconButtonStory("Large");
export const Disabled: Story = createIconButtonStory("Disabled");
export const Loading: Story = createIconButtonStory("Loading");

function createIconButtonStory(name: string): Story {
  const example = IconButtonExampleDefinitions.find(
    function findIconButtonExample(item) {
      return item.name === name;
    },
  );

  if (!example) {
    throw new Error(`IconButton story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderIconButtonStory(args) {
      return <IconButtonExample example={{ ...example, args }} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
