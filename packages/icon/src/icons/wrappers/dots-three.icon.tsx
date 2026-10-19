import { createIcon } from "../../hocs/create-icon.hoc";
import { DotsThreeBoldIcon } from "../bold/dots-three-bold.icon";
import { DotsThreeDuotoneIcon } from "../duotone/dots-three-duotone.icon";
import { DotsThreeFillIcon } from "../fill/dots-three-fill.icon";
import { DotsThreeLightIcon } from "../light/dots-three-light.icon";
import { DotsThreeRegularIcon } from "../regular/dots-three-regular.icon";
import { DotsThreeThinIcon } from "../thin/dots-three-thin.icon";

export const DotsThreeIcon = createIcon("DotsThree", {
  bold: DotsThreeBoldIcon,
  duotone: DotsThreeDuotoneIcon,
  fill: DotsThreeFillIcon,
  light: DotsThreeLightIcon,
  regular: DotsThreeRegularIcon,
  thin: DotsThreeThinIcon,
});
