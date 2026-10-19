import { createIcon } from "../../hocs/create-icon.hoc";
import { ArrowsOutLineHorizontalBoldIcon } from "../bold/arrows-out-line-horizontal-bold.icon";
import { ArrowsOutLineHorizontalDuotoneIcon } from "../duotone/arrows-out-line-horizontal-duotone.icon";
import { ArrowsOutLineHorizontalFillIcon } from "../fill/arrows-out-line-horizontal-fill.icon";
import { ArrowsOutLineHorizontalLightIcon } from "../light/arrows-out-line-horizontal-light.icon";
import { ArrowsOutLineHorizontalRegularIcon } from "../regular/arrows-out-line-horizontal-regular.icon";
import { ArrowsOutLineHorizontalThinIcon } from "../thin/arrows-out-line-horizontal-thin.icon";

export const ArrowsOutLineHorizontalIcon = createIcon(
  "ArrowsOutLineHorizontal",
  {
    bold: ArrowsOutLineHorizontalBoldIcon,
    duotone: ArrowsOutLineHorizontalDuotoneIcon,
    fill: ArrowsOutLineHorizontalFillIcon,
    light: ArrowsOutLineHorizontalLightIcon,
    regular: ArrowsOutLineHorizontalRegularIcon,
    thin: ArrowsOutLineHorizontalThinIcon,
  },
);
