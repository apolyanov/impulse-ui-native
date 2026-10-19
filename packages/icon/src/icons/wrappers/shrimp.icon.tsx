import { createIcon } from "../../hocs/create-icon.hoc";
import { ShrimpBoldIcon } from "../bold/shrimp-bold.icon";
import { ShrimpDuotoneIcon } from "../duotone/shrimp-duotone.icon";
import { ShrimpFillIcon } from "../fill/shrimp-fill.icon";
import { ShrimpLightIcon } from "../light/shrimp-light.icon";
import { ShrimpRegularIcon } from "../regular/shrimp-regular.icon";
import { ShrimpThinIcon } from "../thin/shrimp-thin.icon";

export const ShrimpIcon = createIcon("Shrimp", {
  bold: ShrimpBoldIcon,
  duotone: ShrimpDuotoneIcon,
  fill: ShrimpFillIcon,
  light: ShrimpLightIcon,
  regular: ShrimpRegularIcon,
  thin: ShrimpThinIcon,
});
