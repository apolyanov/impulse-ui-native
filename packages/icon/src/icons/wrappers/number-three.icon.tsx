import { createIcon } from "../../hocs/create-icon.hoc";
import { NumberThreeBoldIcon } from "../bold/number-three-bold.icon";
import { NumberThreeDuotoneIcon } from "../duotone/number-three-duotone.icon";
import { NumberThreeFillIcon } from "../fill/number-three-fill.icon";
import { NumberThreeLightIcon } from "../light/number-three-light.icon";
import { NumberThreeRegularIcon } from "../regular/number-three-regular.icon";
import { NumberThreeThinIcon } from "../thin/number-three-thin.icon";

export const NumberThreeIcon = createIcon("NumberThree", {
  bold: NumberThreeBoldIcon,
  duotone: NumberThreeDuotoneIcon,
  fill: NumberThreeFillIcon,
  light: NumberThreeLightIcon,
  regular: NumberThreeRegularIcon,
  thin: NumberThreeThinIcon,
});
