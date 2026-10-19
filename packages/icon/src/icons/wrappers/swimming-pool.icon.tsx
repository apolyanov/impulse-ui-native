import { createIcon } from "../../hocs/create-icon.hoc";
import { SwimmingPoolBoldIcon } from "../bold/swimming-pool-bold.icon";
import { SwimmingPoolDuotoneIcon } from "../duotone/swimming-pool-duotone.icon";
import { SwimmingPoolFillIcon } from "../fill/swimming-pool-fill.icon";
import { SwimmingPoolLightIcon } from "../light/swimming-pool-light.icon";
import { SwimmingPoolRegularIcon } from "../regular/swimming-pool-regular.icon";
import { SwimmingPoolThinIcon } from "../thin/swimming-pool-thin.icon";

export const SwimmingPoolIcon = createIcon("SwimmingPool", {
  bold: SwimmingPoolBoldIcon,
  duotone: SwimmingPoolDuotoneIcon,
  fill: SwimmingPoolFillIcon,
  light: SwimmingPoolLightIcon,
  regular: SwimmingPoolRegularIcon,
  thin: SwimmingPoolThinIcon,
});
