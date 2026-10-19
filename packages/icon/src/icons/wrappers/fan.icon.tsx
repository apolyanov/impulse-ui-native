import { createIcon } from "../../hocs/create-icon.hoc";
import { FanBoldIcon } from "../bold/fan-bold.icon";
import { FanDuotoneIcon } from "../duotone/fan-duotone.icon";
import { FanFillIcon } from "../fill/fan-fill.icon";
import { FanLightIcon } from "../light/fan-light.icon";
import { FanRegularIcon } from "../regular/fan-regular.icon";
import { FanThinIcon } from "../thin/fan-thin.icon";

export const FanIcon = createIcon("Fan", {
  bold: FanBoldIcon,
  duotone: FanDuotoneIcon,
  fill: FanFillIcon,
  light: FanLightIcon,
  regular: FanRegularIcon,
  thin: FanThinIcon,
});
