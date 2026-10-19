import { createIcon } from "../../hocs/create-icon.hoc";
import { PlusBoldIcon } from "../bold/plus-bold.icon";
import { PlusDuotoneIcon } from "../duotone/plus-duotone.icon";
import { PlusFillIcon } from "../fill/plus-fill.icon";
import { PlusLightIcon } from "../light/plus-light.icon";
import { PlusRegularIcon } from "../regular/plus-regular.icon";
import { PlusThinIcon } from "../thin/plus-thin.icon";

export const PlusIcon = createIcon("Plus", {
  bold: PlusBoldIcon,
  duotone: PlusDuotoneIcon,
  fill: PlusFillIcon,
  light: PlusLightIcon,
  regular: PlusRegularIcon,
  thin: PlusThinIcon,
});
