import { createIcon } from "../../hocs/create-icon.hoc";
import { BellSimpleZBoldIcon } from "../bold/bell-simple-z-bold.icon";
import { BellSimpleZDuotoneIcon } from "../duotone/bell-simple-z-duotone.icon";
import { BellSimpleZFillIcon } from "../fill/bell-simple-z-fill.icon";
import { BellSimpleZLightIcon } from "../light/bell-simple-z-light.icon";
import { BellSimpleZRegularIcon } from "../regular/bell-simple-z-regular.icon";
import { BellSimpleZThinIcon } from "../thin/bell-simple-z-thin.icon";

export const BellSimpleZIcon = createIcon("BellSimpleZ", {
  bold: BellSimpleZBoldIcon,
  duotone: BellSimpleZDuotoneIcon,
  fill: BellSimpleZFillIcon,
  light: BellSimpleZLightIcon,
  regular: BellSimpleZRegularIcon,
  thin: BellSimpleZThinIcon,
});
