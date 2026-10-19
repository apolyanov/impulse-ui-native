import { createIcon } from "../../hocs/create-icon.hoc";
import { EqualsBoldIcon } from "../bold/equals-bold.icon";
import { EqualsDuotoneIcon } from "../duotone/equals-duotone.icon";
import { EqualsFillIcon } from "../fill/equals-fill.icon";
import { EqualsLightIcon } from "../light/equals-light.icon";
import { EqualsRegularIcon } from "../regular/equals-regular.icon";
import { EqualsThinIcon } from "../thin/equals-thin.icon";

export const EqualsIcon = createIcon("Equals", {
  bold: EqualsBoldIcon,
  duotone: EqualsDuotoneIcon,
  fill: EqualsFillIcon,
  light: EqualsLightIcon,
  regular: EqualsRegularIcon,
  thin: EqualsThinIcon,
});
