import { createIcon } from "../../hocs/create-icon.hoc";
import { BalloonBoldIcon } from "../bold/balloon-bold.icon";
import { BalloonDuotoneIcon } from "../duotone/balloon-duotone.icon";
import { BalloonFillIcon } from "../fill/balloon-fill.icon";
import { BalloonLightIcon } from "../light/balloon-light.icon";
import { BalloonRegularIcon } from "../regular/balloon-regular.icon";
import { BalloonThinIcon } from "../thin/balloon-thin.icon";

export const BalloonIcon = createIcon("Balloon", {
  bold: BalloonBoldIcon,
  duotone: BalloonDuotoneIcon,
  fill: BalloonFillIcon,
  light: BalloonLightIcon,
  regular: BalloonRegularIcon,
  thin: BalloonThinIcon,
});
