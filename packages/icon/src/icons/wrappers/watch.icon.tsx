import { createIcon } from "../../hocs/create-icon.hoc";
import { WatchBoldIcon } from "../bold/watch-bold.icon";
import { WatchDuotoneIcon } from "../duotone/watch-duotone.icon";
import { WatchFillIcon } from "../fill/watch-fill.icon";
import { WatchLightIcon } from "../light/watch-light.icon";
import { WatchRegularIcon } from "../regular/watch-regular.icon";
import { WatchThinIcon } from "../thin/watch-thin.icon";

export const WatchIcon = createIcon("Watch", {
  bold: WatchBoldIcon,
  duotone: WatchDuotoneIcon,
  fill: WatchFillIcon,
  light: WatchLightIcon,
  regular: WatchRegularIcon,
  thin: WatchThinIcon,
});
