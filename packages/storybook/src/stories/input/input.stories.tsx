import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@impulse-ui-native/input";
import {
  ComponentSizeOptions,
  createStoryDescription,
  FieldToneOptions,
  FieldVariantOptions,
} from "@impulse-ui-native/storybook";

import { InputAppearanceExample } from "./input-appearance-example";
import { InputFocusExample } from "./input-focus-example";
import { InputDocumentation } from "./input.documentation";
import { InputExample, InputExampleDefinitions } from "./input.examples";

const meta = {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Email",
    placeholder: "you@example.com",
    size: "medium",
    variant: "outlined",
    tone: "neutral",
    disabled: false,
    secureTextEntry: false,
  },
  argTypes: {
    tone: {
      control: "select",
      options: FieldToneOptions,
      description: "Selects the neutral, primary, or secondary field palette.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the input height, padding, and text size.",
    },
    variant: {
      control: "select",
      options: FieldVariantOptions,
      description: "Controls the input surface, border, and text styling.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents editing and applies disabled styling.",
    },
    secureTextEntry: {
      control: "boolean",
      description: "Masks the value and displays the visibility action.",
    },
    error: {
      control: "text",
      description: "Displays validation feedback and error styling.",
    },
    label: {
      control: "text",
      description: "Labels the value expected from the user.",
    },
    placeholder: {
      control: "text",
      description: "Displays guidance while the input is empty.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <InputDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Input labels, validation, secure values, and disabled states.",
  ),
};

export const AppearanceMatrix: Story = {
  render: function renderAppearanceMatrix(args) {
    return <InputAppearanceExample {...args} />;
  },
  parameters: createStoryDescription(
    "All nine variant/tone combinations. Use error, disabled, size, and secure-entry controls to compare states.",
  ),
};

export const SoftPrimary: Story = createInputStory("Soft primary");
export const FilledSecondary: Story = createInputStory("Filled secondary");

export const Default: Story = createInputStory("Default");
export const WithError: Story = createInputStory("Error");
export const Password: Story = createInputStory("Password");
export const Disabled: Story = createInputStory("Disabled");

export const NativeRef: Story = {
  render: function renderNativeRef() {
    return <InputFocusExample />;
  },
  parameters: createStoryDescription(
    "Press Focus email to focus the native TextInput through Input's ref. React Hook Form can use the same ref for invalid-field focus.",
  ),
};

function createInputStory(name: string): Story {
  const example = InputExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Input story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderInputStory(args) {
      return <InputExample example={{ ...example, args }} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
