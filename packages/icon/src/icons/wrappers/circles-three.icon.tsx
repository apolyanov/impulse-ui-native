import { createIcon } from "../../hocs/create-icon.hoc";
import { CirclesThreeBoldIcon } from "../bold/circles-three-bold.icon";
import { CirclesThreeDuotoneIcon } from "../duotone/circles-three-duotone.icon";
import { CirclesThreeFillIcon } from "../fill/circles-three-fill.icon";
import { CirclesThreeLightIcon } from "../light/circles-three-light.icon";
import { CirclesThreeRegularIcon } from "../regular/circles-three-regular.icon";
import { CirclesThreeThinIcon } from "../thin/circles-three-thin.icon";

export const CirclesThreeIcon = createIcon("CirclesThree", {
  bold: CirclesThreeBoldIcon,
  duotone: CirclesThreeDuotoneIcon,
  fill: CirclesThreeFillIcon,
  light: CirclesThreeLightIcon,
  regular: CirclesThreeRegularIcon,
  thin: CirclesThreeThinIcon,
});
