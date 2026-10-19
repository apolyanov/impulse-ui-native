import { createIcon } from "../../hocs/create-icon.hoc";
import { SlidersHorizontalBoldIcon } from "../bold/sliders-horizontal-bold.icon";
import { SlidersHorizontalDuotoneIcon } from "../duotone/sliders-horizontal-duotone.icon";
import { SlidersHorizontalFillIcon } from "../fill/sliders-horizontal-fill.icon";
import { SlidersHorizontalLightIcon } from "../light/sliders-horizontal-light.icon";
import { SlidersHorizontalRegularIcon } from "../regular/sliders-horizontal-regular.icon";
import { SlidersHorizontalThinIcon } from "../thin/sliders-horizontal-thin.icon";

export const SlidersHorizontalIcon = createIcon("SlidersHorizontal", {
  bold: SlidersHorizontalBoldIcon,
  duotone: SlidersHorizontalDuotoneIcon,
  fill: SlidersHorizontalFillIcon,
  light: SlidersHorizontalLightIcon,
  regular: SlidersHorizontalRegularIcon,
  thin: SlidersHorizontalThinIcon,
});
