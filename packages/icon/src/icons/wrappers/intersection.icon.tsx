import { createIcon } from "../../hocs/create-icon.hoc";
import { IntersectionBoldIcon } from "../bold/intersection-bold.icon";
import { IntersectionDuotoneIcon } from "../duotone/intersection-duotone.icon";
import { IntersectionFillIcon } from "../fill/intersection-fill.icon";
import { IntersectionLightIcon } from "../light/intersection-light.icon";
import { IntersectionRegularIcon } from "../regular/intersection-regular.icon";
import { IntersectionThinIcon } from "../thin/intersection-thin.icon";

export const IntersectionIcon = createIcon("Intersection", {
  bold: IntersectionBoldIcon,
  duotone: IntersectionDuotoneIcon,
  fill: IntersectionFillIcon,
  light: IntersectionLightIcon,
  regular: IntersectionRegularIcon,
  thin: IntersectionThinIcon,
});
