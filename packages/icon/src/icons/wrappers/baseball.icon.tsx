import { createIcon } from "../../hocs/create-icon.hoc";
import { BaseballBoldIcon } from "../bold/baseball-bold.icon";
import { BaseballDuotoneIcon } from "../duotone/baseball-duotone.icon";
import { BaseballFillIcon } from "../fill/baseball-fill.icon";
import { BaseballLightIcon } from "../light/baseball-light.icon";
import { BaseballRegularIcon } from "../regular/baseball-regular.icon";
import { BaseballThinIcon } from "../thin/baseball-thin.icon";

export const BaseballIcon = createIcon("Baseball", {
  bold: BaseballBoldIcon,
  duotone: BaseballDuotoneIcon,
  fill: BaseballFillIcon,
  light: BaseballLightIcon,
  regular: BaseballRegularIcon,
  thin: BaseballThinIcon,
});
