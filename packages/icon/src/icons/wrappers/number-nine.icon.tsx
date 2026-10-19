import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberNineBoldIcon } from "../bold/number-nine-bold.icon";
import { NumberNineDuotoneIcon } from "../duotone/number-nine-duotone.icon";
import { NumberNineFillIcon } from "../fill/number-nine-fill.icon";
import { NumberNineLightIcon } from "../light/number-nine-light.icon";
import { NumberNineRegularIcon } from "../regular/number-nine-regular.icon";
import { NumberNineThinIcon } from "../thin/number-nine-thin.icon";

export const NumberNineIcon = createIcon("NumberNine", {
  bold: NumberNineBoldIcon,
  duotone: NumberNineDuotoneIcon,
  fill: NumberNineFillIcon,
  light: NumberNineLightIcon,
  regular: NumberNineRegularIcon,
  thin: NumberNineThinIcon,
});
