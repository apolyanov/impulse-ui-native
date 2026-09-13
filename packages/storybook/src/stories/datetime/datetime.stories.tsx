import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@impulse-ui-native/datetime";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { DatetimeDocumentation } from "./datetime.documentation";
import {
  DatetimeExample,
  DatetimeExampleDefinitions,
} from "./datetime.examples";

const meta = {
  title: "Components/Date and Time",
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <DatetimeDocumentation />;
  },
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
    render: function renderDatetimeStory() {
      return <DatetimeExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
