import { createIcon } from "../../hocs/create-icon.hoc";
import { MoonBoldIcon } from "../bold/moon-bold.icon";
import { MoonDuotoneIcon } from "../duotone/moon-duotone.icon";
import { MoonFillIcon } from "../fill/moon-fill.icon";
import { MoonLightIcon } from "../light/moon-light.icon";
import { MoonRegularIcon } from "../regular/moon-regular.icon";
import { MoonThinIcon } from "../thin/moon-thin.icon";

export const MoonIcon = createIcon("Moon", {
  bold: MoonBoldIcon,
  duotone: MoonDuotoneIcon,
  fill: MoonFillIcon,
  light: MoonLightIcon,
  regular: MoonRegularIcon,
  thin: MoonThinIcon,
});
