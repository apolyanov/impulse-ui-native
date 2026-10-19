import { createIcon } from "../../hocs/create-icon.hoc";
import { UnionBoldIcon } from "../bold/union-bold.icon";
import { UnionDuotoneIcon } from "../duotone/union-duotone.icon";
import { UnionFillIcon } from "../fill/union-fill.icon";
import { UnionLightIcon } from "../light/union-light.icon";
import { UnionRegularIcon } from "../regular/union-regular.icon";
import { UnionThinIcon } from "../thin/union-thin.icon";

export const UnionIcon = createIcon("Union", {
  bold: UnionBoldIcon,
  duotone: UnionDuotoneIcon,
  fill: UnionFillIcon,
  light: UnionLightIcon,
  regular: UnionRegularIcon,
  thin: UnionThinIcon,
});
