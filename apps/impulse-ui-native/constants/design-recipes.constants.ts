import type { ComponentProps, ComponentType } from "react";

import { AccountFormRecipe } from "../../../docs/design-system/recipes/account-form";
import { AnchoredActionsRecipe } from "../../../docs/design-system/recipes/anchored-actions";
import { ColorSettingsRecipe } from "../../../docs/design-system/recipes/color-settings";
import { DataListRecipe } from "../../../docs/design-system/recipes/data-list";
import { DetailsDialogRecipe } from "../../../docs/design-system/recipes/details-dialog";
import { DisclosureSettingsRecipe } from "../../../docs/design-system/recipes/disclosure-settings";
import { FieldAppearancesRecipe } from "../../../docs/design-system/recipes/field-appearances";
import { FiltersRecipe } from "../../../docs/design-system/recipes/filters";
import { MetricsRecipe } from "../../../docs/design-system/recipes/metrics";
import { NotificationsRecipe } from "../../../docs/design-system/recipes/notifications";
import { OnboardingRecipe } from "../../../docs/design-system/recipes/onboarding";
import { ProductCarouselRecipe } from "../../../docs/design-system/recipes/product-carousel";
import { ProfileCardRecipe } from "../../../docs/design-system/recipes/profile-card";

interface NativeRecipeDefinition {
  id: string;
  title: string;
  Component: ComponentType<ComponentProps<typeof FieldAppearancesRecipe>>;
}

export const NativeRecipeEntries: readonly NativeRecipeDefinition[] = [
  { id: "account-form", title: "Account form", Component: AccountFormRecipe },
  { id: "filters", title: "Filter controls", Component: FiltersRecipe },
  {
    id: "profile-card",
    title: "Profile card and status",
    Component: ProfileCardRecipe,
  },
  {
    id: "data-list",
    title: "Loading, empty and paginated list",
    Component: DataListRecipe,
  },
  {
    id: "product-carousel",
    title: "Workspace carousel",
    Component: ProductCarouselRecipe,
  },
  {
    id: "disclosure-settings",
    title: "Expandable settings",
    Component: DisclosureSettingsRecipe,
  },
  {
    id: "details-dialog",
    title: "Local dialog and sheet",
    Component: DetailsDialogRecipe,
  },
  {
    id: "anchored-actions",
    title: "Anchored menu and tooltip",
    Component: AnchoredActionsRecipe,
  },
  {
    id: "notifications",
    title: "Registered toast notification",
    Component: NotificationsRecipe,
  },
  { id: "metrics", title: "Chart and progress", Component: MetricsRecipe },
  {
    id: "color-settings",
    title: "Composed color editor",
    Component: ColorSettingsRecipe,
  },
  {
    id: "onboarding",
    title: "Tabs and controlled steps",
    Component: OnboardingRecipe,
  },
  {
    id: "field-appearances",
    title: "Field and action appearance comparison",
    Component: FieldAppearancesRecipe,
  },
];
