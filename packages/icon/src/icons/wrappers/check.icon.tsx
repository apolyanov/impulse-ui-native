import { createIcon } from "../../hocs/create-icon.hoc";
import { CheckBoldIcon } from "../bold/check-bold.icon";
import { CheckDuotoneIcon } from "../duotone/check-duotone.icon";
import { CheckFillIcon } from "../fill/check-fill.icon";
import { CheckLightIcon } from "../light/check-light.icon";
import { CheckRegularIcon } from "../regular/check-regular.icon";
import { CheckThinIcon } from "../thin/check-thin.icon";

export const CheckIcon = createIcon("Check", {
  bold: CheckBoldIcon,
  duotone: CheckDuotoneIcon,
  fill: CheckFillIcon,
  light: CheckLightIcon,
  regular: CheckRegularIcon,
  thin: CheckThinIcon,
});
