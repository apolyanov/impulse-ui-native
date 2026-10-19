import { createIcon } from "../../hocs/create-icon.hoc";
import { PlaceholderBoldIcon } from "../bold/placeholder-bold.icon";
import { PlaceholderDuotoneIcon } from "../duotone/placeholder-duotone.icon";
import { PlaceholderFillIcon } from "../fill/placeholder-fill.icon";
import { PlaceholderLightIcon } from "../light/placeholder-light.icon";
import { PlaceholderRegularIcon } from "../regular/placeholder-regular.icon";
import { PlaceholderThinIcon } from "../thin/placeholder-thin.icon";

export const PlaceholderIcon = createIcon("Placeholder", {
  bold: PlaceholderBoldIcon,
  duotone: PlaceholderDuotoneIcon,
  fill: PlaceholderFillIcon,
  light: PlaceholderLightIcon,
  regular: PlaceholderRegularIcon,
  thin: PlaceholderThinIcon,
});
