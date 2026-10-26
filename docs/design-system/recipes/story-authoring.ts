import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@impulse-ui-native/input";
import {
  createComponentDescription,
  FieldToneOptions,
  FieldVariantOptions,
} from "@impulse-ui-native/storybook";

export const inputRecipeMeta = {
  title: "Recipes/Project name",
  component: Input,
  args: { label: "Project name", variant: "outlined", tone: "neutral" },
  argTypes: {
    variant: { control: "select", options: FieldVariantOptions },
    tone: { control: "select", options: FieldToneOptions },
  },
  parameters: createComponentDescription(
    "A native project name field. Open its flyout siblings in the field-appearances recipe to inspect inheritance.",
  ),
} satisfies Meta<typeof Input>;
export type InputRecipeStory = StoryObj<typeof inputRecipeMeta>;
