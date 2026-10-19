import { createIcon } from "../../hocs/create-icon.hoc";
import { EmptyBoldIcon } from "../bold/empty-bold.icon";
import { EmptyDuotoneIcon } from "../duotone/empty-duotone.icon";
import { EmptyFillIcon } from "../fill/empty-fill.icon";
import { EmptyLightIcon } from "../light/empty-light.icon";
import { EmptyRegularIcon } from "../regular/empty-regular.icon";
import { EmptyThinIcon } from "../thin/empty-thin.icon";

export const EmptyIcon = createIcon("Empty", {
  bold: EmptyBoldIcon,
  duotone: EmptyDuotoneIcon,
  fill: EmptyFillIcon,
  light: EmptyLightIcon,
  regular: EmptyRegularIcon,
  thin: EmptyThinIcon,
});
