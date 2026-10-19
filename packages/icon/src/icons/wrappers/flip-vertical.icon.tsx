import { createIcon } from "../../hocs/create-icon.hoc";
import { FlipVerticalBoldIcon } from "../bold/flip-vertical-bold.icon";
import { FlipVerticalDuotoneIcon } from "../duotone/flip-vertical-duotone.icon";
import { FlipVerticalFillIcon } from "../fill/flip-vertical-fill.icon";
import { FlipVerticalLightIcon } from "../light/flip-vertical-light.icon";
import { FlipVerticalRegularIcon } from "../regular/flip-vertical-regular.icon";
import { FlipVerticalThinIcon } from "../thin/flip-vertical-thin.icon";

export const FlipVerticalIcon = createIcon("FlipVertical", {
  bold: FlipVerticalBoldIcon,
  duotone: FlipVerticalDuotoneIcon,
  fill: FlipVerticalFillIcon,
  light: FlipVerticalLightIcon,
  regular: FlipVerticalRegularIcon,
  thin: FlipVerticalThinIcon,
});
