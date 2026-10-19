import { createIcon } from "../../hocs/create-icon.hoc";
import { KeyboardBoldIcon } from "../bold/keyboard-bold.icon";
import { KeyboardDuotoneIcon } from "../duotone/keyboard-duotone.icon";
import { KeyboardFillIcon } from "../fill/keyboard-fill.icon";
import { KeyboardLightIcon } from "../light/keyboard-light.icon";
import { KeyboardRegularIcon } from "../regular/keyboard-regular.icon";
import { KeyboardThinIcon } from "../thin/keyboard-thin.icon";

export const KeyboardIcon = createIcon("Keyboard", {
  bold: KeyboardBoldIcon,
  duotone: KeyboardDuotoneIcon,
  fill: KeyboardFillIcon,
  light: KeyboardLightIcon,
  regular: KeyboardRegularIcon,
  thin: KeyboardThinIcon,
});
