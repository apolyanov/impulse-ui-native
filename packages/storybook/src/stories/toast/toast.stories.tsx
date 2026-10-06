import type { Meta, StoryObj } from "@storybook/react";

import { createStoryDescription } from "@impulse-ui-native/storybook";
import { Toast } from "@impulse-ui-native/toast";

import { ToastDocumentation } from "./toast.documentation";
import { ToastExample, ToastExampleDefinitions } from "./toast.examples";

const meta = {
  title: "Components/Toast",
  component: Toast,
  args: { id: "storybook-toast" },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ToastDocumentation />;
  },
};
export const Bottom: Story = createToastStory("Bottom");
export const Top: Story = createToastStory("Top");
export const Persistent: Story = createToastStory("Persistent");
export const Warning: Story = createToastStory("Warning");

function createToastStory(name: string): Story {
  const example = ToastExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error("Toast example not found: " + name);
  }

  return {
    render: function renderToast() {
      return <ToastExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
