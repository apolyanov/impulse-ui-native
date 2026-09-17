import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@impulse-ui-native/datetime";
import {
  ComponentSizeOptions,
  ComponentVariantOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { DatetimeDocumentation } from "./datetime.documentation";
import {
  DatetimeExample,
  DatetimeExampleDefinitions,
} from "./datetime.examples";

const meta = {
  title: "Components/Date and Time",
  component: DatePicker,
  args: {
    size: "medium",
    variant: "outlined",
    disabled: false,
    clearable: true,
  },
  argTypes: {
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls the picker height, padding, and text size.",
    },
    variant: {
      control: "select",
      options: ComponentVariantOptions,
      description: "Controls the picker surface, border, and text styling.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies disabled styling.",
    },
    clearable: {
      control: "boolean",
      description: "Shows the clear action when the picker has a value.",
    },
    error: {
      control: "text",
      description: "Displays validation feedback and error styling.",
    },
    label: {
      control: "text",
      description: "Labels the date or time value expected from the user.",
    },
    placeholder: {
      control: "text",
      description: "Displays guidance while the picker is empty.",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <DatetimeDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for date, time, and range pickers, including their shared visual styles.",
  ),
};

export const Date: Story = createDatetimeStory("Date");
export const DateRange: Story = createDatetimeStory("DateRange");
export const Datetime: Story = createDatetimeStory("Datetime");
export const DatetimeRange: Story = createDatetimeStory("DatetimeRange");
export const Time: Story = createDatetimeStory("Time");

function createDatetimeStory(name: string): Story {
  const example = DatetimeExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Datetime story "${name}" was not found.`);
  }

  return {
    render: function renderDatetimeStory(args) {
      return <DatetimeExample example={example} args={args} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
