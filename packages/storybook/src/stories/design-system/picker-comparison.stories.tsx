import type { Meta, StoryObj } from "@storybook/react";

import { AppShellRecipe } from "../../../../../docs/design-system/recipes/app-shell";
import { PickerComparisonPreview } from "./picker-comparison.preview";

const meta = {
  title: "Design system/Picker hierarchy comparison",
  component: PickerComparisonPreview,
  args: { variant: "filled", tone: "primary" },
  argTypes: {
    variant: { control: "select", options: ["outlined", "filled", "soft"] },
    tone: { control: "select", options: ["neutral", "primary", "secondary"] },
  },
  decorators: [
    function comparisonShell(Story) {
      return (
        <AppShellRecipe>
          <Story />
        </AppShellRecipe>
      );
    },
  ],
} satisfies Meta<typeof PickerComparisonPreview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const ConsistentEditor: Story = {};
