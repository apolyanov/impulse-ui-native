import { createIcon } from "../../hocs/create-icon.hoc";
import { FlipHorizontalBoldIcon } from "../bold/flip-horizontal-bold.icon";
import { FlipHorizontalDuotoneIcon } from "../duotone/flip-horizontal-duotone.icon";
import { FlipHorizontalFillIcon } from "../fill/flip-horizontal-fill.icon";
import { FlipHorizontalLightIcon } from "../light/flip-horizontal-light.icon";
import { FlipHorizontalRegularIcon } from "../regular/flip-horizontal-regular.icon";
import { FlipHorizontalThinIcon } from "../thin/flip-horizontal-thin.icon";

export const FlipHorizontalIcon = createIcon("FlipHorizontal", {
  bold: FlipHorizontalBoldIcon,
  duotone: FlipHorizontalDuotoneIcon,
  fill: FlipHorizontalFillIcon,
  light: FlipHorizontalLightIcon,
  regular: FlipHorizontalRegularIcon,
  thin: FlipHorizontalThinIcon,
});
