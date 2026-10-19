import { createIcon } from "../../hocs/create-icon.hoc";
import { LineVerticalBoldIcon } from "../bold/line-vertical-bold.icon";
import { LineVerticalDuotoneIcon } from "../duotone/line-vertical-duotone.icon";
import { LineVerticalFillIcon } from "../fill/line-vertical-fill.icon";
import { LineVerticalLightIcon } from "../light/line-vertical-light.icon";
import { LineVerticalRegularIcon } from "../regular/line-vertical-regular.icon";
import { LineVerticalThinIcon } from "../thin/line-vertical-thin.icon";

export const LineVerticalIcon = createIcon("LineVertical", {
  bold: LineVerticalBoldIcon,
  duotone: LineVerticalDuotoneIcon,
  fill: LineVerticalFillIcon,
  light: LineVerticalLightIcon,
  regular: LineVerticalRegularIcon,
  thin: LineVerticalThinIcon,
});
