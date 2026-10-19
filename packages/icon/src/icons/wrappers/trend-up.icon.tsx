import { createIcon } from "../../hocs/create-icon.hoc";
import { TrendUpBoldIcon } from "../bold/trend-up-bold.icon";
import { TrendUpDuotoneIcon } from "../duotone/trend-up-duotone.icon";
import { TrendUpFillIcon } from "../fill/trend-up-fill.icon";
import { TrendUpLightIcon } from "../light/trend-up-light.icon";
import { TrendUpRegularIcon } from "../regular/trend-up-regular.icon";
import { TrendUpThinIcon } from "../thin/trend-up-thin.icon";

export const TrendUpIcon = createIcon("TrendUp", {
  bold: TrendUpBoldIcon,
  duotone: TrendUpDuotoneIcon,
  fill: TrendUpFillIcon,
  light: TrendUpLightIcon,
  regular: TrendUpRegularIcon,
  thin: TrendUpThinIcon,
});
