import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "@impulse-ui-native/pagination";
import {
  ComponentSizeOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";

import { PaginationDocumentation } from "./pagination.documentation";
import {
  PaginationExample,
  PaginationExampleDefinitions,
} from "./pagination.examples";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  args: {
    compact: false,
    defaultPage: 1,
    disabled: false,
    pageCount: 12,
    size: "medium",
  },
  argTypes: {
    page: {
      control: "number",
      description: "Controls the current page.",
    },
    defaultPage: {
      control: "number",
      description: "Sets the initial page for uncontrolled usage.",
    },
    pageCount: {
      control: { min: 1, type: "number" },
      description: "Sets the total number of pages.",
    },
    compact: {
      control: "boolean",
      description: "Uses the compact previous/status/next layout.",
    },
    disabled: {
      control: "boolean",
      description: "Disables all page navigation.",
    },
    size: {
      control: "select",
      options: ComponentSizeOptions,
      description: "Controls target size, typography, icons, and spacing.",
    },
    onPageChange: {
      control: false,
      description: "Called with the requested page.",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <PaginationDocumentation />;
  },
  parameters: createStoryDescription(
    "A complete native usage guide for Pagination sizes, compact layout, overflow behavior, disabled state, and controlled state.",
  ),
};

export const Default: Story = createPaginationStory("Default");
export const CompactNative: Story = createPaginationStory("CompactNative");
export const AdaptiveWindow: Story = createPaginationStory("AdaptiveWindow");
export const OverflowStart: Story = createPaginationStory("OverflowStart");
export const OverflowMiddle: Story = createPaginationStory("OverflowMiddle");
export const Small: Story = createPaginationStory("Small");
export const Medium: Story = createPaginationStory("Medium");
export const Large: Story = createPaginationStory("Large");
export const Disabled: Story = createPaginationStory("Disabled");
export const Controlled: Story = createPaginationStory("Controlled");

function createPaginationStory(name: string): Story {
  const example = PaginationExampleDefinitions.find(
    (item) => item.name === name,
  );

  if (!example) {
    throw new Error(`Pagination story "${name}" was not found.`);
  }

  return {
    args: example.args,
    render: function renderPaginationStory(args) {
      return <PaginationExample example={{ ...example, args }} />;
    },
    parameters: createStoryDescription(example.description),
  };
}
