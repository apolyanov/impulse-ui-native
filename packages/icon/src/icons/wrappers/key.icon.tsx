import { createIcon } from "../../hocs/create-icon.hoc";
import { KeyBoldIcon } from "../bold/key-bold.icon";
import { KeyDuotoneIcon } from "../duotone/key-duotone.icon";
import { KeyFillIcon } from "../fill/key-fill.icon";
import { KeyLightIcon } from "../light/key-light.icon";
import { KeyRegularIcon } from "../regular/key-regular.icon";
import { KeyThinIcon } from "../thin/key-thin.icon";

export const KeyIcon = createIcon("Key", {
  bold: KeyBoldIcon,
  duotone: KeyDuotoneIcon,
  fill: KeyFillIcon,
  light: KeyLightIcon,
  regular: KeyRegularIcon,
  thin: KeyThinIcon,
});
