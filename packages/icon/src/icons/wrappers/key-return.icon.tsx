import { createIcon } from "../../hocs/create-icon.hoc";
import { KeyReturnBoldIcon } from "../bold/key-return-bold.icon";
import { KeyReturnDuotoneIcon } from "../duotone/key-return-duotone.icon";
import { KeyReturnFillIcon } from "../fill/key-return-fill.icon";
import { KeyReturnLightIcon } from "../light/key-return-light.icon";
import { KeyReturnRegularIcon } from "../regular/key-return-regular.icon";
import { KeyReturnThinIcon } from "../thin/key-return-thin.icon";

export const KeyReturnIcon = createIcon("KeyReturn", {
  bold: KeyReturnBoldIcon,
  duotone: KeyReturnDuotoneIcon,
  fill: KeyReturnFillIcon,
  light: KeyReturnLightIcon,
  regular: KeyReturnRegularIcon,
  thin: KeyReturnThinIcon,
});
