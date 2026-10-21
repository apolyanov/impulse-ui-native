import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@impulse-ui-native/select";
import {
  ComponentSizeOptions,
  createStoryDescription,
  FieldVariantOptions,
} from "@impulse-ui-native/storybook";

import { SelectInitialScrollExample } from "./select-initial-scroll-example";
import { SelectLayoutExample } from "./select-layout-example";
import { SelectDocumentation } from "./select.documentation";
import {
  SelectExample,
  SelectExampleDefinitions,
  SelectStoryOptions,
} from "./select.examples";

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    options: SelectStoryOptions,
    size: "medium",
    variant: "outlined",
    disabled: false,
    loading: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the select height, padding, and text size.",
    },
    variant: {
      control: "select",
      options: FieldVariantOptions,
      description: "Controls the select surface, border, and text styling.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    loading: {
      control: "boolean",
      description: "Replaces the current value with a loading indicator.",
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
      description: "Displays guidance while no option is selected.",
    },
    options: {
      control: false,
      description: "Provides the available labels and values.",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InitialScroll: Story = {
  render: function renderInitialScroll() {
    return <SelectInitialScrollExample />;
  },
};

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <SelectDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for single and multiple selects, states, sizes, and variants.",
  ),
};

export const Single: Story = createSelectStory("Single");
export const Layout: Story = {
  render: function renderLayout() {
    return <SelectLayoutExample />;
  },
  parameters: createStoryDescription(
    "Use layout props on fields directly: columns stretch naturally, and row children share width with flex without extra wrappers.",
  ),
};
export const Multiple: Story = createSelectStory("Multiple");
export const Loading: Story = createSelectStory("Loading");

function createSelectStory(name: string): Story {
  const example = SelectExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Select story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderSelectStory(args) {
      return <SelectExample example={example} args={args} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
