import { createIcon } from "../../hocs/create-icon.hoc";
import { KeyholeBoldIcon } from "../bold/keyhole-bold.icon";
import { KeyholeDuotoneIcon } from "../duotone/keyhole-duotone.icon";
import { KeyholeFillIcon } from "../fill/keyhole-fill.icon";
import { KeyholeLightIcon } from "../light/keyhole-light.icon";
import { KeyholeRegularIcon } from "../regular/keyhole-regular.icon";
import { KeyholeThinIcon } from "../thin/keyhole-thin.icon";

export const KeyholeIcon = createIcon("Keyhole", {
  bold: KeyholeBoldIcon,
  duotone: KeyholeDuotoneIcon,
  fill: KeyholeFillIcon,
  light: KeyholeLightIcon,
  regular: KeyholeRegularIcon,
  thin: KeyholeThinIcon,
});
