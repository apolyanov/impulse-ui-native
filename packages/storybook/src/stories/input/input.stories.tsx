import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@impulse-ui-native/input";
import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

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
    disabled: false,
    secureTextEntry: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the input height, padding, and text size.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
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

export const Default: Story = createInputStory("Default");
export const WithError: Story = createInputStory("Error");
export const Password: Story = createInputStory("Password");
export const Disabled: Story = createInputStory("Disabled");

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
