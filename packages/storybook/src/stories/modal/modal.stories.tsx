import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@impulse-ui-native/modal";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { ModalDocumentation } from "./modal.documentation";
import { ModalExample, ModalExampleDefinitions } from "./modal.examples";

const meta = {
  title: "Components/Modal",
  component: Modal,
  args: { id: "storybook-modal" },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ModalDocumentation />;
  },
  parameters: createStoryDescription(
    "Local and global modals, compound composition, and supported sizes.",
  ),
};

export const Composition: Story = createModalStory("Composition");
export const ReadyMade: Story = createModalStory("ReadyMade");
export const Registered: Story = createModalStory("Registered");
export const Small: Story = createModalStory("small");
export const Medium: Story = createModalStory("medium");
export const Large: Story = createModalStory("large");

function createModalStory(name: string): Story {
  const example = ModalExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Modal story "${name}" was not found.`);
  }

  return {
    render: function renderStory() {
      return <ModalExample example={example} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
