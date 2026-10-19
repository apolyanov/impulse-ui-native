import { createIcon } from "../../hocs/create-icon.hoc";
import { ChalkboardBoldIcon } from "../bold/chalkboard-bold.icon";
import { ChalkboardDuotoneIcon } from "../duotone/chalkboard-duotone.icon";
import { ChalkboardFillIcon } from "../fill/chalkboard-fill.icon";
import { ChalkboardLightIcon } from "../light/chalkboard-light.icon";
import { ChalkboardRegularIcon } from "../regular/chalkboard-regular.icon";
import { ChalkboardThinIcon } from "../thin/chalkboard-thin.icon";

export const ChalkboardIcon = createIcon("Chalkboard", {
  bold: ChalkboardBoldIcon,
  duotone: ChalkboardDuotoneIcon,
  fill: ChalkboardFillIcon,
  light: ChalkboardLightIcon,
  regular: ChalkboardRegularIcon,
  thin: ChalkboardThinIcon,
});
