import { createIcon } from "../../hocs/create-icon.hoc";
import { TrendDownBoldIcon } from "../bold/trend-down-bold.icon";
import { TrendDownDuotoneIcon } from "../duotone/trend-down-duotone.icon";
import { TrendDownFillIcon } from "../fill/trend-down-fill.icon";
import { TrendDownLightIcon } from "../light/trend-down-light.icon";
import { TrendDownRegularIcon } from "../regular/trend-down-regular.icon";
import { TrendDownThinIcon } from "../thin/trend-down-thin.icon";

export const TrendDownIcon = createIcon("TrendDown", {
  bold: TrendDownBoldIcon,
  duotone: TrendDownDuotoneIcon,
  fill: TrendDownFillIcon,
  light: TrendDownLightIcon,
  regular: TrendDownRegularIcon,
  thin: TrendDownThinIcon,
});
