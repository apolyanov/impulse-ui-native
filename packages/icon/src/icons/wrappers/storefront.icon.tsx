import { createIcon } from "../../hocs/create-icon.hoc";
import { StorefrontBoldIcon } from "../bold/storefront-bold.icon";
import { StorefrontDuotoneIcon } from "../duotone/storefront-duotone.icon";
import { StorefrontFillIcon } from "../fill/storefront-fill.icon";
import { StorefrontLightIcon } from "../light/storefront-light.icon";
import { StorefrontRegularIcon } from "../regular/storefront-regular.icon";
import { StorefrontThinIcon } from "../thin/storefront-thin.icon";

export const StorefrontIcon = createIcon("Storefront", {
  bold: StorefrontBoldIcon,
  duotone: StorefrontDuotoneIcon,
  fill: StorefrontFillIcon,
  light: StorefrontLightIcon,
  regular: StorefrontRegularIcon,
  thin: StorefrontThinIcon,
});
