import { createIcon } from "../../hocs/create-icon.hoc";
import { DressBoldIcon } from "../bold/dress-bold.icon";
import { DressDuotoneIcon } from "../duotone/dress-duotone.icon";
import { DressFillIcon } from "../fill/dress-fill.icon";
import { DressLightIcon } from "../light/dress-light.icon";
import { DressRegularIcon } from "../regular/dress-regular.icon";
import { DressThinIcon } from "../thin/dress-thin.icon";

export const DressIcon = createIcon("Dress", {
  bold: DressBoldIcon,
  duotone: DressDuotoneIcon,
  fill: DressFillIcon,
  light: DressLightIcon,
  regular: DressRegularIcon,
  thin: DressThinIcon,
});
