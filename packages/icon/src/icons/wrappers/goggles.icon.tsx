import { createIcon } from "../../hocs/create-icon.hoc";
import { GogglesBoldIcon } from "../bold/goggles-bold.icon";
import { GogglesDuotoneIcon } from "../duotone/goggles-duotone.icon";
import { GogglesFillIcon } from "../fill/goggles-fill.icon";
import { GogglesLightIcon } from "../light/goggles-light.icon";
import { GogglesRegularIcon } from "../regular/goggles-regular.icon";
import { GogglesThinIcon } from "../thin/goggles-thin.icon";

export const GogglesIcon = createIcon("Goggles", {
  bold: GogglesBoldIcon,
  duotone: GogglesDuotoneIcon,
  fill: GogglesFillIcon,
  light: GogglesLightIcon,
  regular: GogglesRegularIcon,
  thin: GogglesThinIcon,
});
