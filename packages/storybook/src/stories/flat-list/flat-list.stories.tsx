import type { Meta, StoryObj } from "@storybook/react";

import { FlatList } from "@impulse-ui-native/flat-list";

import { FlatListDocumentation } from "./flat-list.documentation";
import { FlatListExample } from "./flat-list.examples";

const meta = {
  title: "Components/FlatList",
  component: FlatList,
  args: { data: [], renderItem: () => null },
} satisfies Meta<typeof FlatList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <FlatListDocumentation />;
  },
};
export const Fixed: Story = {
  render: function renderFixed() {
    return <FlatListExample mode="fixed" />;
  },
};
export const Horizontal: Story = {
  render: function renderHorizontal() {
    return <FlatListExample mode="horizontal" />;
  },
};
export const DelayedData: Story = {
  render: function renderDelayed() {
    return <FlatListExample mode="delayed" />;
  },
};
