import { createIcon } from "../../hocs/create-icon.hoc";
import { ChairBoldIcon } from "../bold/chair-bold.icon";
import { ChairDuotoneIcon } from "../duotone/chair-duotone.icon";
import { ChairFillIcon } from "../fill/chair-fill.icon";
import { ChairLightIcon } from "../light/chair-light.icon";
import { ChairRegularIcon } from "../regular/chair-regular.icon";
import { ChairThinIcon } from "../thin/chair-thin.icon";

export const ChairIcon = createIcon("Chair", {
  bold: ChairBoldIcon,
  duotone: ChairDuotoneIcon,
  fill: ChairFillIcon,
  light: ChairLightIcon,
  regular: ChairRegularIcon,
  thin: ChairThinIcon,
});
