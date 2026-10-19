import { createIcon } from "../../hocs/create-icon.hoc";
import { SailboatBoldIcon } from "../bold/sailboat-bold.icon";
import { SailboatDuotoneIcon } from "../duotone/sailboat-duotone.icon";
import { SailboatFillIcon } from "../fill/sailboat-fill.icon";
import { SailboatLightIcon } from "../light/sailboat-light.icon";
import { SailboatRegularIcon } from "../regular/sailboat-regular.icon";
import { SailboatThinIcon } from "../thin/sailboat-thin.icon";

export const SailboatIcon = createIcon("Sailboat", {
  bold: SailboatBoldIcon,
  duotone: SailboatDuotoneIcon,
  fill: SailboatFillIcon,
  light: SailboatLightIcon,
  regular: SailboatRegularIcon,
  thin: SailboatThinIcon,
});
