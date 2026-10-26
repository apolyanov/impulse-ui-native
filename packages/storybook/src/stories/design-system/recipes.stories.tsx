import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import type { ColorScheme } from "@impulse-ui-native/theme";

import { AccountFormRecipe } from "../../../../../docs/design-system/recipes/account-form";
import { AnchoredActionsRecipe } from "../../../../../docs/design-system/recipes/anchored-actions";
import { AppShellRecipe } from "../../../../../docs/design-system/recipes/app-shell";
import { ColorSettingsRecipe } from "../../../../../docs/design-system/recipes/color-settings";
import { DataListRecipe } from "../../../../../docs/design-system/recipes/data-list";
import { DetailsDialogRecipe } from "../../../../../docs/design-system/recipes/details-dialog";
import { DisclosureSettingsRecipe } from "../../../../../docs/design-system/recipes/disclosure-settings";
import { FieldAppearancesRecipe } from "../../../../../docs/design-system/recipes/field-appearances";
import { FiltersRecipe } from "../../../../../docs/design-system/recipes/filters";
import { MetricsRecipe } from "../../../../../docs/design-system/recipes/metrics";
import { NotificationsRecipe } from "../../../../../docs/design-system/recipes/notifications";
import { OnboardingRecipe } from "../../../../../docs/design-system/recipes/onboarding";
import { ProductCarouselRecipe } from "../../../../../docs/design-system/recipes/product-carousel";
import { ProfileCardRecipe } from "../../../../../docs/design-system/recipes/profile-card";
import { RecipeFrame } from "./recipe-frame";

type RecipeArgs = ComponentProps<typeof FieldAppearancesRecipe> & {
  scheme: ColorScheme;
};
const meta = {
  title: "Design system/Recipes",
  component: FieldAppearancesRecipe,
  args: {
    scheme: "light",
    variant: "outlined",
    tone: "neutral",
    disabled: false,
  },
  argTypes: {
    scheme: { control: "select", options: ["light", "dark"] },
    variant: { control: "select", options: ["outlined", "filled", "soft"] },
    tone: { control: "select", options: ["neutral", "primary", "secondary"] },
    disabled: { control: "boolean" },
    error: { control: "text" },
  },
  decorators: [
    function nativeRecipe(Story, context) {
      const scrollable = context.parameters.recipeScroll !== false;
      return (
        <AppShellRecipe scheme={context.args.scheme}>
          <RecipeFrame scrollable={scrollable}>
            <Story />
          </RecipeFrame>
        </AppShellRecipe>
      );
    },
  ],
} satisfies Meta<RecipeArgs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const FieldAppearances: Story = {
  render: (args) => <FieldAppearancesRecipe {...args} />,
};
export const AccountForm: Story = { render: () => <AccountFormRecipe /> };
export const Filters: Story = { render: () => <FiltersRecipe /> };
export const ProfileCard: Story = { render: () => <ProfileCardRecipe /> };
export const DataList: Story = {
  parameters: { recipeScroll: false },
  render: () => <DataListRecipe />,
};
export const ProductCarousel: Story = {
  render: () => <ProductCarouselRecipe />,
};
export const DisclosureSettings: Story = {
  render: () => <DisclosureSettingsRecipe />,
};
export const DetailsDialog: Story = { render: () => <DetailsDialogRecipe /> };
export const AnchoredActions: Story = {
  render: () => <AnchoredActionsRecipe />,
};
export const Notifications: Story = { render: () => <NotificationsRecipe /> };
export const Metrics: Story = { render: () => <MetricsRecipe /> };
export const ColorSettings: Story = { render: () => <ColorSettingsRecipe /> };
export const Onboarding: Story = { render: () => <OnboardingRecipe /> };
