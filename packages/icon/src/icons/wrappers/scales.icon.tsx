import { createIcon } from "../../hocs/create-icon.hoc";
import { ScalesBoldIcon } from "../bold/scales-bold.icon";
import { ScalesDuotoneIcon } from "../duotone/scales-duotone.icon";
import { ScalesFillIcon } from "../fill/scales-fill.icon";
import { ScalesLightIcon } from "../light/scales-light.icon";
import { ScalesRegularIcon } from "../regular/scales-regular.icon";
import { ScalesThinIcon } from "../thin/scales-thin.icon";

export const ScalesIcon = createIcon("Scales", {
  bold: ScalesBoldIcon,
  duotone: ScalesDuotoneIcon,
  fill: ScalesFillIcon,
  light: ScalesLightIcon,
  regular: ScalesRegularIcon,
  thin: ScalesThinIcon,
});
