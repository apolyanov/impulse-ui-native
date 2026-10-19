import { createIcon } from "../../hocs/create-icon.hoc";
import { BaseballHelmetBoldIcon } from "../bold/baseball-helmet-bold.icon";
import { BaseballHelmetDuotoneIcon } from "../duotone/baseball-helmet-duotone.icon";
import { BaseballHelmetFillIcon } from "../fill/baseball-helmet-fill.icon";
import { BaseballHelmetLightIcon } from "../light/baseball-helmet-light.icon";
import { BaseballHelmetRegularIcon } from "../regular/baseball-helmet-regular.icon";
import { BaseballHelmetThinIcon } from "../thin/baseball-helmet-thin.icon";

export const BaseballHelmetIcon = createIcon("BaseballHelmet", {
  bold: BaseballHelmetBoldIcon,
  duotone: BaseballHelmetDuotoneIcon,
  fill: BaseballHelmetFillIcon,
  light: BaseballHelmetLightIcon,
  regular: BaseballHelmetRegularIcon,
  thin: BaseballHelmetThinIcon,
});
