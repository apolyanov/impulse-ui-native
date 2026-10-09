import type { Meta, StoryObj } from "@storybook/react";

import type { TabsProps } from "@impulse-ui-native/tabs";
import {
  ComponentSizeOptions,
  createStoryDescription,
} from "@impulse-ui-native/storybook";
import { Tabs } from "@impulse-ui-native/tabs";

import { TabsDocumentation } from "./tabs.documentation";
import { TabsExample, TabsExampleDefinitions } from "./tabs.examples";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  args: { items: [], disabled: false, size: "medium", overflow: "scroll" },
  argTypes: {
    items: {
      control: false,
      description:
        "Unique values with labels, content, and optional disabled state.",
    },
    value: { control: "text", description: "Controls the selected section." },
    defaultValue: {
      control: "text",
      description:
        "Initial uncontrolled value; omitted values start on the first enabled item.",
    },
    onValueChange: { control: false },
    disabled: { control: "boolean" },
    size: { control: "select", options: ComponentSizeOptions },
    overflow: { control: "select", options: ["scroll", "clip"] },
    panelStyle: { control: false },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <TabsDocumentation />;
  },
  parameters: createStoryDescription(
    "Flat native Tabs with conditional panels, light/dark tokens, scrolling, disabled states, and controlled selection.",
  ),
};

export const Default: Story = createTabsStory("Default");
export const Scrollable: Story = createTabsStory("Scrollable");
export const Clipped: Story = createTabsStory("Clipped");
export const Small: Story = createTabsStory("Small");
export const Large: Story = createTabsStory("Large");
export const Disabled: Story = createTabsStory("Disabled");
export const DisabledItem: Story = createTabsStory("DisabledItem");
export const DisabledSelected: Story = createTabsStory("DisabledSelected");
export const FirstEnabled: Story = createTabsStory("FirstEnabled");
export const AllDisabled: Story = createTabsStory("AllDisabled");
export const Controlled: Story = createTabsStory("Controlled");
export const ConditionalPanels: Story = createTabsStory("ConditionalPanels");
export const Empty: Story = createTabsStory("Empty");
export const MissingValue: Story = createTabsStory("MissingValue");

function createTabsStory(name: string): Story {
  const example = TabsExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Tabs story "${name}" was not found.`);
  }

  let args: TabsProps = { ...example.args, items: [], value: undefined };

  if (example.args.value !== undefined) {
    args = {
      ...example.args,
      items: [],
      value: example.args.value,
      defaultValue: undefined,
    };
  }

  return {
    args,
    render: function renderTabsStory(args) {
      return (
        <TabsExample
          key={args.value ?? args.defaultValue}
          example={{ ...example, args }}
        />
      );
    },
    parameters: createStoryDescription(example.description),
  };
}
