import type { Meta, StoryObj } from "@storybook/react";

import { createStoryDescription } from "@impulse-ui-native/storybook";
import { Typography } from "@impulse-ui-native/toolkit";

import { TypographyDocumentation } from "./typography.documentation";
import {
  TypographyExample,
  TypographyExampleDefinitions,
} from "./typography.examples";

const meta = {
  title: "Components/Typography",
  component: Typography.Master,
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
  argTypes: {
    children: {
      control: "text",
      description:
        "The visible text content rendered by the typography preset.",
    },
    color: {
      control: "text",
      description: "Optional text color passed to the typography component.",
    },
    style: {
      control: false,
      description: "Optional style override for the typography component.",
    },
  },
} satisfies Meta<typeof Typography.Master>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <TypographyDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete usage guide for Typography presets, hierarchy, supporting text styles, and documentation text patterns.",
  ),
};

export const Master: Story = createTypographyStory("Master");
export const DisplayLarge: Story = createTypographyStory("DisplayLarge");
export const DisplayMedium: Story = createTypographyStory("DisplayMedium");
export const DisplaySmall: Story = createTypographyStory("DisplaySmall");
export const Title1: Story = createTypographyStory("Title1");
export const Title2: Story = createTypographyStory("Title2");
export const Title3: Story = createTypographyStory("Title3");
export const Title4: Story = createTypographyStory("Title4");
export const Title5: Story = createTypographyStory("Title5");
export const Title6: Story = createTypographyStory("Title6");
export const Subtitle1: Story = createTypographyStory("Subtitle1");
export const Subtitle2: Story = createTypographyStory("Subtitle2");
export const BodyLarge: Story = createTypographyStory("BodyLarge");
export const Body: Story = createTypographyStory("Body");
export const BodySmall: Story = createTypographyStory("BodySmall");
export const Caption: Story = createTypographyStory("Caption");
export const Label: Story = createTypographyStory("Label");
export const Overline: Story = createTypographyStory("Overline");
export const Helper: Story = createTypographyStory("Helper");
export const Code: Story = createTypographyStory("Code");
export const Quote: Story = createTypographyStory("Quote");
export const Eyebrow: Story = createTypographyStory("Eyebrow");

function createTypographyStory(name: string): Story {
  const example = TypographyExampleDefinitions.find(
    function findTypographyExample(item) {
      return item.name === name;
    },
  );

  if (!example) {
    throw new Error(`Typography story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderTypographyStory(args) {
      return (
        <TypographyExample
          example={{
            ...example,
            args,
          }}
        />
      );
    },
    parameters: createStoryDescription(example.description),
  };
}
