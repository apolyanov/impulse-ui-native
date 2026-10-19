import { createIcon } from "../../hocs/create-icon.hoc";
import { SkipBackBoldIcon } from "../bold/skip-back-bold.icon";
import { SkipBackDuotoneIcon } from "../duotone/skip-back-duotone.icon";
import { SkipBackFillIcon } from "../fill/skip-back-fill.icon";
import { SkipBackLightIcon } from "../light/skip-back-light.icon";
import { SkipBackRegularIcon } from "../regular/skip-back-regular.icon";
import { SkipBackThinIcon } from "../thin/skip-back-thin.icon";

export const SkipBackIcon = createIcon("SkipBack", {
  bold: SkipBackBoldIcon,
  duotone: SkipBackDuotoneIcon,
  fill: SkipBackFillIcon,
  light: SkipBackLightIcon,
  regular: SkipBackRegularIcon,
  thin: SkipBackThinIcon,
});
