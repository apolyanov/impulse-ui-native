import { createIcon } from "../../hocs/create-icon.hoc";
import { ScreencastBoldIcon } from "../bold/screencast-bold.icon";
import { ScreencastDuotoneIcon } from "../duotone/screencast-duotone.icon";
import { ScreencastFillIcon } from "../fill/screencast-fill.icon";
import { ScreencastLightIcon } from "../light/screencast-light.icon";
import { ScreencastRegularIcon } from "../regular/screencast-regular.icon";
import { ScreencastThinIcon } from "../thin/screencast-thin.icon";

export const ScreencastIcon = createIcon("Screencast", {
  bold: ScreencastBoldIcon,
  duotone: ScreencastDuotoneIcon,
  fill: ScreencastFillIcon,
  light: ScreencastLightIcon,
  regular: ScreencastRegularIcon,
  thin: ScreencastThinIcon,
});
