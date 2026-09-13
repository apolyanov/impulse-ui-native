import type { Meta, StoryObj } from "@storybook/react";

import { DataView } from "@impulse-ui-native/data-state";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { DataViewDocumentation } from "./data-view.documentation";
import {
  DataViewExample,
  DataViewExampleDefinitions,
} from "./data-view.examples";

const meta = {
  title: "Components/DataView",
  component: DataView,
  args: {
    loading: false,
    error: null,
    isEmpty: false,
    LoadingComponent: () => null,
    errorViewProps: {
      text: "Could not load content.",
      primaryActionLabel: "Try again",
      onPressPrimaryAction: () => undefined,
    },
    emptyViewProps: {
      text: "No content yet.",
      primaryActionLabel: "Create item",
      onPressPrimaryAction: () => undefined,
    },
  },
} satisfies Meta<typeof DataView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <DataViewDocumentation />;
  },
};

export const Content: Story = createDataViewStory("Content");
export const Loading: Story = createDataViewStory("Loading");
export const Empty: Story = createDataViewStory("Empty");
export const ErrorState: Story = createDataViewStory("Error");

function createDataViewStory(name: string): Story {
  const example = DataViewExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`DataView story "${name}" was not found.`);
  }

  return {
    render: function renderDataViewStory() {
      return <DataViewExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
