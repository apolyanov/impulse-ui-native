import { createIcon } from "../../hocs/create-icon.hoc";
import { AsclepiusBoldIcon } from "../bold/asclepius-bold.icon";
import { AsclepiusDuotoneIcon } from "../duotone/asclepius-duotone.icon";
import { AsclepiusFillIcon } from "../fill/asclepius-fill.icon";
import { AsclepiusLightIcon } from "../light/asclepius-light.icon";
import { AsclepiusRegularIcon } from "../regular/asclepius-regular.icon";
import { AsclepiusThinIcon } from "../thin/asclepius-thin.icon";

export const AsclepiusIcon = createIcon("Asclepius", {
  bold: AsclepiusBoldIcon,
  duotone: AsclepiusDuotoneIcon,
  fill: AsclepiusFillIcon,
  light: AsclepiusLightIcon,
  regular: AsclepiusRegularIcon,
  thin: AsclepiusThinIcon,
});
