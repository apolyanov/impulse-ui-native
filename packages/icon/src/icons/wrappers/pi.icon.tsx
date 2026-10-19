import { createIcon } from "../../hocs/create-icon.hoc";
import { PiBoldIcon } from "../bold/pi-bold.icon";
import { PiDuotoneIcon } from "../duotone/pi-duotone.icon";
import { PiFillIcon } from "../fill/pi-fill.icon";
import { PiLightIcon } from "../light/pi-light.icon";
import { PiRegularIcon } from "../regular/pi-regular.icon";
import { PiThinIcon } from "../thin/pi-thin.icon";

export const PiIcon = createIcon("Pi", {
  bold: PiBoldIcon,
  duotone: PiDuotoneIcon,
  fill: PiFillIcon,
  light: PiLightIcon,
  regular: PiRegularIcon,
  thin: PiThinIcon,
});
