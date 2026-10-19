import { createIcon } from "../../hocs/create-icon.hoc";
import { VectorThreeBoldIcon } from "../bold/vector-three-bold.icon";
import { VectorThreeDuotoneIcon } from "../duotone/vector-three-duotone.icon";
import { VectorThreeFillIcon } from "../fill/vector-three-fill.icon";
import { VectorThreeLightIcon } from "../light/vector-three-light.icon";
import { VectorThreeRegularIcon } from "../regular/vector-three-regular.icon";
import { VectorThreeThinIcon } from "../thin/vector-three-thin.icon";

export const VectorThreeIcon = createIcon("VectorThree", {
  bold: VectorThreeBoldIcon,
  duotone: VectorThreeDuotoneIcon,
  fill: VectorThreeFillIcon,
  light: VectorThreeLightIcon,
  regular: VectorThreeRegularIcon,
  thin: VectorThreeThinIcon,
});
