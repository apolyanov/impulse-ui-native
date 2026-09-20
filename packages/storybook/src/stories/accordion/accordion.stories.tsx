import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "@impulse-ui-native/accordion";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { AccordionDocumentation } from "./accordion.documentation";
import {
  AccordionExample,
  AccordionExampleDefinitions,
} from "./accordion.examples";

const meta = {
  title: "Components/Accordion",
  component: Accordion.Root,
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Controls whether one or several items can be expanded.",
    },
    collapsible: {
      control: "boolean",
      description: "Allows the open item to close in single mode.",
    },
    disabled: {
      control: "boolean",
      description: "Disables every trigger in the accordion.",
    },
    value: { control: false },
    defaultValue: { control: false },
    onValueChange: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof Accordion.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <AccordionDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete guide to Accordion composition, expansion modes, keyboard behavior, animation, and nesting.",
  ),
};

export const Single: Story = createAccordionStory("Single");
export const Multiple: Story = createAccordionStory("Multiple");
export const NonCollapsible: Story = createAccordionStory("NonCollapsible");
export const DisabledItem: Story = createAccordionStory("DisabledItem");
export const Nested: Story = createAccordionStory("Nested");

function createAccordionStory(name: string): Story {
  const example = AccordionExampleDefinitions.find(
    (item) => item.name === name,
  );

  if (!example) {
    throw new Error(`Accordion story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderStory(args) {
      return <AccordionExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
