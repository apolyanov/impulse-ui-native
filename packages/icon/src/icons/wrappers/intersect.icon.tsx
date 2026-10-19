import { createIcon } from "../../hocs/create-icon.hoc";
import { IntersectBoldIcon } from "../bold/intersect-bold.icon";
import { IntersectDuotoneIcon } from "../duotone/intersect-duotone.icon";
import { IntersectFillIcon } from "../fill/intersect-fill.icon";
import { IntersectLightIcon } from "../light/intersect-light.icon";
import { IntersectRegularIcon } from "../regular/intersect-regular.icon";
import { IntersectThinIcon } from "../thin/intersect-thin.icon";

export const IntersectIcon = createIcon("Intersect", {
  bold: IntersectBoldIcon,
  duotone: IntersectDuotoneIcon,
  fill: IntersectFillIcon,
  light: IntersectLightIcon,
  regular: IntersectRegularIcon,
  thin: IntersectThinIcon,
});
