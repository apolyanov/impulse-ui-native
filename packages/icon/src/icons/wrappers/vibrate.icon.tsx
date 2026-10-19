import { createIcon } from "../../hocs/create-icon.hoc";
import { VibrateBoldIcon } from "../bold/vibrate-bold.icon";
import { VibrateDuotoneIcon } from "../duotone/vibrate-duotone.icon";
import { VibrateFillIcon } from "../fill/vibrate-fill.icon";
import { VibrateLightIcon } from "../light/vibrate-light.icon";
import { VibrateRegularIcon } from "../regular/vibrate-regular.icon";
import { VibrateThinIcon } from "../thin/vibrate-thin.icon";

export const VibrateIcon = createIcon("Vibrate", {
  bold: VibrateBoldIcon,
  duotone: VibrateDuotoneIcon,
  fill: VibrateFillIcon,
  light: VibrateLightIcon,
  regular: VibrateRegularIcon,
  thin: VibrateThinIcon,
});
