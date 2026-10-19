import { createIcon } from "../../hocs/create-icon.hoc";
import { WheelchairBoldIcon } from "../bold/wheelchair-bold.icon";
import { WheelchairDuotoneIcon } from "../duotone/wheelchair-duotone.icon";
import { WheelchairFillIcon } from "../fill/wheelchair-fill.icon";
import { WheelchairLightIcon } from "../light/wheelchair-light.icon";
import { WheelchairRegularIcon } from "../regular/wheelchair-regular.icon";
import { WheelchairThinIcon } from "../thin/wheelchair-thin.icon";

export const WheelchairIcon = createIcon("Wheelchair", {
  bold: WheelchairBoldIcon,
  duotone: WheelchairDuotoneIcon,
  fill: WheelchairFillIcon,
  light: WheelchairLightIcon,
  regular: WheelchairRegularIcon,
  thin: WheelchairThinIcon,
});
