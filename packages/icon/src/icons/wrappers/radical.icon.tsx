import { createIcon } from "../../hocs/create-icon.hoc";
import { RadicalBoldIcon } from "../bold/radical-bold.icon";
import { RadicalDuotoneIcon } from "../duotone/radical-duotone.icon";
import { RadicalFillIcon } from "../fill/radical-fill.icon";
import { RadicalLightIcon } from "../light/radical-light.icon";
import { RadicalRegularIcon } from "../regular/radical-regular.icon";
import { RadicalThinIcon } from "../thin/radical-thin.icon";

export const RadicalIcon = createIcon("Radical", {
  bold: RadicalBoldIcon,
  duotone: RadicalDuotoneIcon,
  fill: RadicalFillIcon,
  light: RadicalLightIcon,
  regular: RadicalRegularIcon,
  thin: RadicalThinIcon,
});
