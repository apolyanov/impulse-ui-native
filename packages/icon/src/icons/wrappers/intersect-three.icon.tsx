import { createIcon } from "../../hocs/create-icon.hoc";
import { IntersectThreeBoldIcon } from "../bold/intersect-three-bold.icon";
import { IntersectThreeDuotoneIcon } from "../duotone/intersect-three-duotone.icon";
import { IntersectThreeFillIcon } from "../fill/intersect-three-fill.icon";
import { IntersectThreeLightIcon } from "../light/intersect-three-light.icon";
import { IntersectThreeRegularIcon } from "../regular/intersect-three-regular.icon";
import { IntersectThreeThinIcon } from "../thin/intersect-three-thin.icon";

export const IntersectThreeIcon = createIcon("IntersectThree", {
  bold: IntersectThreeBoldIcon,
  duotone: IntersectThreeDuotoneIcon,
  fill: IntersectThreeFillIcon,
  light: IntersectThreeLightIcon,
  regular: IntersectThreeRegularIcon,
  thin: IntersectThreeThinIcon,
});
