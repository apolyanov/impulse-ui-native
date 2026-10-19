import { createIcon } from "../../hocs/create-icon.hoc";
import { VanBoldIcon } from "../bold/van-bold.icon";
import { VanDuotoneIcon } from "../duotone/van-duotone.icon";
import { VanFillIcon } from "../fill/van-fill.icon";
import { VanLightIcon } from "../light/van-light.icon";
import { VanRegularIcon } from "../regular/van-regular.icon";
import { VanThinIcon } from "../thin/van-thin.icon";

export const VanIcon = createIcon("Van", {
  bold: VanBoldIcon,
  duotone: VanDuotoneIcon,
  fill: VanFillIcon,
  light: VanLightIcon,
  regular: VanRegularIcon,
  thin: VanThinIcon,
});
