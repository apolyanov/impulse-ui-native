import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@impulse-ui-native/input";
import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { TextareaDocumentation } from "./textarea.documentation";
import {
  TextareaExample,
  TextareaExampleDefinitions,
} from "./textarea.examples";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    autoGrow: false,
    disabled: false,
    label: "Notes",
    maxRows: 8,
    minRows: 3,
    placeholder: "Add any relevant details",
    showCharacterCount: false,
    size: "medium",
    variant: "outlined",
  },
  argTypes: {
    autoGrow: {
      control: "boolean",
      description:
        "Grows the field with its content until the maximum row count is reached.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents editing and applies disabled styling.",
    },
    error: {
      control: "text",
      description: "Displays validation feedback and invalid styling.",
    },
    label: {
      control: "text",
      description: "Labels the multiline value expected from the user.",
    },
    maxLength: {
      control: { type: "number", min: 1 },
      description: "Enforces a native maximum character count.",
    },
    maxRows: {
      control: { type: "number", min: 1 },
      description:
        "Limits visible rows before an auto-growing textarea scrolls.",
    },
    minRows: {
      control: { type: "number", min: 1 },
      description: "Sets the initial and minimum visible row count.",
    },
    placeholder: {
      control: "text",
      description: "Displays guidance while the textarea is empty.",
    },
    showCharacterCount: {
      control: "boolean",
      description: "Displays the current count and optional maximum.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls text metrics and vertical spacing.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Controls the textarea surface and border styling.",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <TextareaDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Textarea values, validation, character counting, auto-grow behavior, and disabled states.",
  ),
};

export const Default: Story = createTextareaStory("Default");
export const CharacterCount: Story = createTextareaStory("Character count");
export const Validation: Story = createTextareaStory("Validation");
export const AutoGrow: Story = createTextareaStory("Auto grow");
export const Controlled: Story = createTextareaStory("Controlled");
export const Disabled: Story = createTextareaStory("Disabled");

function createTextareaStory(name: string): Story {
  const example = TextareaExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Textarea story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderTextareaStory(args) {
      return <TextareaExample example={{ ...example, args }} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
