import type { Meta, StoryObj } from "@storybook/react";

import { List } from "@impulse-ui-native/list";

import { ListReadyMadeExample } from "./list-ready-made-example";
import { ListDocumentation } from "./list.documentation";
import { ListExample } from "./list.examples";

const meta = { title: "Components/List", component: List } satisfies Meta<
  typeof List
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

export const ReadyMade: Story = {
  render: function renderReadyMade() {
    return <ListReadyMadeExample />;
  },
};
