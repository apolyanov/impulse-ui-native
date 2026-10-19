import { createIcon } from "../../hocs/create-icon.hoc";
import { NotEqualsBoldIcon } from "../bold/not-equals-bold.icon";
import { NotEqualsDuotoneIcon } from "../duotone/not-equals-duotone.icon";
import { NotEqualsFillIcon } from "../fill/not-equals-fill.icon";
import { NotEqualsLightIcon } from "../light/not-equals-light.icon";
import { NotEqualsRegularIcon } from "../regular/not-equals-regular.icon";
import { NotEqualsThinIcon } from "../thin/not-equals-thin.icon";

export const NotEqualsIcon = createIcon("NotEquals", {
  bold: NotEqualsBoldIcon,
  duotone: NotEqualsDuotoneIcon,
  fill: NotEqualsFillIcon,
  light: NotEqualsLightIcon,
  regular: NotEqualsRegularIcon,
  thin: NotEqualsThinIcon,
});
