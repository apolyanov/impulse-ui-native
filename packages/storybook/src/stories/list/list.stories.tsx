import type { Meta, StoryObj } from "@storybook/react";

import { List } from "@impulse-ui-native/primitives";

import { ListDocumentation } from "./list.documentation";
import { ListExample } from "./list.examples";

const meta = { title: "Components/List", component: List.Root } satisfies Meta<
  typeof List.Root
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ListDocumentation />;
  },
};
export const Composition: Story = {
  render: function renderComposition() {
    return <ListExample />;
  },
};
