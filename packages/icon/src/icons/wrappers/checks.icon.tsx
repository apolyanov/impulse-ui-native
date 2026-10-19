import { createIcon } from "../../hocs/create-icon.hoc";
import { ChecksBoldIcon } from "../bold/checks-bold.icon";
import { ChecksDuotoneIcon } from "../duotone/checks-duotone.icon";
import { ChecksFillIcon } from "../fill/checks-fill.icon";
import { ChecksLightIcon } from "../light/checks-light.icon";
import { ChecksRegularIcon } from "../regular/checks-regular.icon";
import { ChecksThinIcon } from "../thin/checks-thin.icon";

export const ChecksIcon = createIcon("Checks", {
  bold: ChecksBoldIcon,
  duotone: ChecksDuotoneIcon,
  fill: ChecksFillIcon,
  light: ChecksLightIcon,
  regular: ChecksRegularIcon,
  thin: ChecksThinIcon,
});
