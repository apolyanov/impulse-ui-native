import { createIcon } from "../../hocs/create-icon.hoc";
import { FadersHorizontalBoldIcon } from "../bold/faders-horizontal-bold.icon";
import { FadersHorizontalDuotoneIcon } from "../duotone/faders-horizontal-duotone.icon";
import { FadersHorizontalFillIcon } from "../fill/faders-horizontal-fill.icon";
import { FadersHorizontalLightIcon } from "../light/faders-horizontal-light.icon";
import { FadersHorizontalRegularIcon } from "../regular/faders-horizontal-regular.icon";
import { FadersHorizontalThinIcon } from "../thin/faders-horizontal-thin.icon";

export const FadersHorizontalIcon = createIcon("FadersHorizontal", {
  bold: FadersHorizontalBoldIcon,
  duotone: FadersHorizontalDuotoneIcon,
  fill: FadersHorizontalFillIcon,
  light: FadersHorizontalLightIcon,
  regular: FadersHorizontalRegularIcon,
  thin: FadersHorizontalThinIcon,
});
