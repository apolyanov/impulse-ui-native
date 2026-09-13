import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "@impulse-ui-native/stepper";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { StepperDocumentation } from "./stepper.documentation";
import { StepperExample, StepperExampleDefinitions } from "./stepper.examples";

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  args: {
    items: [],
    current: 0,
    onChange: () => undefined,
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <StepperDocumentation />;
  },
};

export const Flow: Story = createStepperStory("Flow");
export const Tabs: Story = createStepperStory("Tabs");

function createStepperStory(name: string): Story {
  const example = StepperExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Stepper story "${name}" was not found.`);
  }

  return {
    render: function renderStepperStory() {
      return <StepperExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
