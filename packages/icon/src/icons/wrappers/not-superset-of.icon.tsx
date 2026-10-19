import { createIcon } from "../../hocs/create-icon.hoc";
import { NotSupersetOfBoldIcon } from "../bold/not-superset-of-bold.icon";
import { NotSupersetOfDuotoneIcon } from "../duotone/not-superset-of-duotone.icon";
import { NotSupersetOfFillIcon } from "../fill/not-superset-of-fill.icon";
import { NotSupersetOfLightIcon } from "../light/not-superset-of-light.icon";
import { NotSupersetOfRegularIcon } from "../regular/not-superset-of-regular.icon";
import { NotSupersetOfThinIcon } from "../thin/not-superset-of-thin.icon";

export const NotSupersetOfIcon = createIcon("NotSupersetOf", {
  bold: NotSupersetOfBoldIcon,
  duotone: NotSupersetOfDuotoneIcon,
  fill: NotSupersetOfFillIcon,
  light: NotSupersetOfLightIcon,
  regular: NotSupersetOfRegularIcon,
  thin: NotSupersetOfThinIcon,
});
