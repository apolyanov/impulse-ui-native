import { createIcon } from "../../hocs/create-icon.hoc";
import { ApproximateEqualsBoldIcon } from "../bold/approximate-equals-bold.icon";
import { ApproximateEqualsDuotoneIcon } from "../duotone/approximate-equals-duotone.icon";
import { ApproximateEqualsFillIcon } from "../fill/approximate-equals-fill.icon";
import { ApproximateEqualsLightIcon } from "../light/approximate-equals-light.icon";
import { ApproximateEqualsRegularIcon } from "../regular/approximate-equals-regular.icon";
import { ApproximateEqualsThinIcon } from "../thin/approximate-equals-thin.icon";

export const ApproximateEqualsIcon = createIcon("ApproximateEquals", {
  bold: ApproximateEqualsBoldIcon,
  duotone: ApproximateEqualsDuotoneIcon,
  fill: ApproximateEqualsFillIcon,
  light: ApproximateEqualsLightIcon,
  regular: ApproximateEqualsRegularIcon,
  thin: ApproximateEqualsThinIcon,
});
