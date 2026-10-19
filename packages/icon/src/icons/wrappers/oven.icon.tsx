import { createIcon } from "../../hocs/create-icon.hoc";
import { OvenBoldIcon } from "../bold/oven-bold.icon";
import { OvenDuotoneIcon } from "../duotone/oven-duotone.icon";
import { OvenFillIcon } from "../fill/oven-fill.icon";
import { OvenLightIcon } from "../light/oven-light.icon";
import { OvenRegularIcon } from "../regular/oven-regular.icon";
import { OvenThinIcon } from "../thin/oven-thin.icon";

export const OvenIcon = createIcon("Oven", {
  bold: OvenBoldIcon,
  duotone: OvenDuotoneIcon,
  fill: OvenFillIcon,
  light: OvenLightIcon,
  regular: OvenRegularIcon,
  thin: OvenThinIcon,
});
