import { createIcon } from "../../hocs/create-icon.hoc";
import { TextHThreeBoldIcon } from "../bold/text-h-three-bold.icon";
import { TextHThreeDuotoneIcon } from "../duotone/text-h-three-duotone.icon";
import { TextHThreeFillIcon } from "../fill/text-h-three-fill.icon";
import { TextHThreeLightIcon } from "../light/text-h-three-light.icon";
import { TextHThreeRegularIcon } from "../regular/text-h-three-regular.icon";
import { TextHThreeThinIcon } from "../thin/text-h-three-thin.icon";

export const TextHThreeIcon = createIcon("TextHThree", {
  bold: TextHThreeBoldIcon,
  duotone: TextHThreeDuotoneIcon,
  fill: TextHThreeFillIcon,
  light: TextHThreeLightIcon,
  regular: TextHThreeRegularIcon,
  thin: TextHThreeThinIcon,
});
