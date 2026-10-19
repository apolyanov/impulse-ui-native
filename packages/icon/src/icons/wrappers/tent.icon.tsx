import { createIcon } from "../../hocs/create-icon.hoc";
import { TentBoldIcon } from "../bold/tent-bold.icon";
import { TentDuotoneIcon } from "../duotone/tent-duotone.icon";
import { TentFillIcon } from "../fill/tent-fill.icon";
import { TentLightIcon } from "../light/tent-light.icon";
import { TentRegularIcon } from "../regular/tent-regular.icon";
import { TentThinIcon } from "../thin/tent-thin.icon";

export const TentIcon = createIcon("Tent", {
  bold: TentBoldIcon,
  duotone: TentDuotoneIcon,
  fill: TentFillIcon,
  light: TentLightIcon,
  regular: TentRegularIcon,
  thin: TentThinIcon,
});
