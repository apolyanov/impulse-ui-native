import { createIcon } from "../../hocs/create-icon.hoc";
import { BaseballCapBoldIcon } from "../bold/baseball-cap-bold.icon";
import { BaseballCapDuotoneIcon } from "../duotone/baseball-cap-duotone.icon";
import { BaseballCapFillIcon } from "../fill/baseball-cap-fill.icon";
import { BaseballCapLightIcon } from "../light/baseball-cap-light.icon";
import { BaseballCapRegularIcon } from "../regular/baseball-cap-regular.icon";
import { BaseballCapThinIcon } from "../thin/baseball-cap-thin.icon";

export const BaseballCapIcon = createIcon("BaseballCap", {
  bold: BaseballCapBoldIcon,
  duotone: BaseballCapDuotoneIcon,
  fill: BaseballCapFillIcon,
  light: BaseballCapLightIcon,
  regular: BaseballCapRegularIcon,
  thin: BaseballCapThinIcon,
});
