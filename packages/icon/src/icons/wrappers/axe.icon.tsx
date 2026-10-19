import { createIcon } from "../../hocs/create-icon.hoc";
import { AxeBoldIcon } from "../bold/axe-bold.icon";
import { AxeDuotoneIcon } from "../duotone/axe-duotone.icon";
import { AxeFillIcon } from "../fill/axe-fill.icon";
import { AxeLightIcon } from "../light/axe-light.icon";
import { AxeRegularIcon } from "../regular/axe-regular.icon";
import { AxeThinIcon } from "../thin/axe-thin.icon";

export const AxeIcon = createIcon("Axe", {
  bold: AxeBoldIcon,
  duotone: AxeDuotoneIcon,
  fill: AxeFillIcon,
  light: AxeLightIcon,
  regular: AxeRegularIcon,
  thin: AxeThinIcon,
});
