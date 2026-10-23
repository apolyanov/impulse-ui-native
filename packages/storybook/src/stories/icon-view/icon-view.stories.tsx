import type { Meta, StoryObj } from "@storybook/react";

import { IconView } from "@impulse-ui-native/icon-view";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import {
  ComponentSizeOptions,
  DisplayVariantOptions,
} from "@impulse-ui-native/storybook";

import { IconViewDocumentation } from "./icon-view.documentation";

const meta = {
  title: "Components/IconView",
  component: IconView,
  args: {
    icon: CheckIcon,
    size: "medium",
    variant: "filled",
    tone: "primary",
    alignSelf: "center",
  },
  argTypes: {
    icon: { control: false },
    iconProps: { control: false },
    size: { control: "select", options: ComponentSizeOptions },
    variant: { control: "select", options: DisplayVariantOptions },
    tone: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "neutral",
        "error",
        "warning",
        "success",
        "info",
      ],
    },
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof IconView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Documentation: Story = {
  render: function renderDocumentation() {
    return <IconViewDocumentation />;
  },
};
