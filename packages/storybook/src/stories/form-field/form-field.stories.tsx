import type { Meta, StoryObj } from "@storybook/react";

import { FormField } from "@impulse-ui-native/form-field";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { FormFieldDocumentation } from "./form-field.documentation";
import {
  FormFieldExample,
  FormFieldExampleDefinitions,
} from "./form-field.examples";

const meta = {
  title: "Components/FormField",
  component: FormField,
  args: {
    children: () => null,
    description: "Receive updates about your account.",
    disabled: false,
    label: "Notifications",
    required: false,
  },
  argTypes: {
    children: {
      control: false,
      description:
        "Render function receiving controlProps, invalid, and required state.",
    },
    description: {
      control: "text",
      description: "Provides supporting guidance for the control.",
    },
    disabled: {
      control: "boolean",
      description:
        "Coordinates disabled styling, semantics, and control behavior.",
    },
    error: {
      control: "text",
      description: "Displays and announces validation feedback.",
    },
    label: {
      control: "text",
      description: "Provides the visible and accessible field name.",
    },
    required: {
      control: "boolean",
      description: "Adds a visible and accessible required marker.",
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <FormFieldDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for FormField labels, descriptions, required state, validation, disabled behavior, and custom-control accessibility wiring.",
  ),
};

export const Default: Story = createFormFieldStory("Default");
export const Required: Story = createFormFieldStory("Required");
export const Validation: Story = createFormFieldStory("Validation");
export const Disabled: Story = createFormFieldStory("Disabled");
export const CustomControl: Story = createFormFieldStory("Custom control");

function createFormFieldStory(name: string): Story {
  const example = FormFieldExampleDefinitions.find(
    (item) => item.name === name,
  );

  if (!example) {
    throw new Error(`FormField story "${name}" was not found.`);
  }

  return {
    args: {
      ...example.args,
      children: () => null,
    },
    render: function renderFormFieldStory(args) {
      const { children: _children, ...fieldArgs } = args;

      return (
        <FormFieldExample example={{ ...example, args: fieldArgs }} elevated />
      );
    },
    parameters: createStoryDescription(example.description),
  };
}
