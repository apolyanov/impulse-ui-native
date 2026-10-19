import { createIcon } from "../../hocs/create-icon.hoc";
import { PowerBoldIcon } from "../bold/power-bold.icon";
import { PowerDuotoneIcon } from "../duotone/power-duotone.icon";
import { PowerFillIcon } from "../fill/power-fill.icon";
import { PowerLightIcon } from "../light/power-light.icon";
import { PowerRegularIcon } from "../regular/power-regular.icon";
import { PowerThinIcon } from "../thin/power-thin.icon";

export const PowerIcon = createIcon("Power", {
  bold: PowerBoldIcon,
  duotone: PowerDuotoneIcon,
  fill: PowerFillIcon,
  light: PowerLightIcon,
  regular: PowerRegularIcon,
  thin: PowerThinIcon,
});
