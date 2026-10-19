import { createIcon } from "../../hocs/create-icon.hoc";
import { BinocularsBoldIcon } from "../bold/binoculars-bold.icon";
import { BinocularsDuotoneIcon } from "../duotone/binoculars-duotone.icon";
import { BinocularsFillIcon } from "../fill/binoculars-fill.icon";
import { BinocularsLightIcon } from "../light/binoculars-light.icon";
import { BinocularsRegularIcon } from "../regular/binoculars-regular.icon";
import { BinocularsThinIcon } from "../thin/binoculars-thin.icon";

export const BinocularsIcon = createIcon("Binoculars", {
  bold: BinocularsBoldIcon,
  duotone: BinocularsDuotoneIcon,
  fill: BinocularsFillIcon,
  light: BinocularsLightIcon,
  regular: BinocularsRegularIcon,
  thin: BinocularsThinIcon,
});
