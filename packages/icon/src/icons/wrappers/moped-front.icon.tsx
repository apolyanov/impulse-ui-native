import { createIcon } from "../../hocs/create-icon.hoc";
import { MopedFrontBoldIcon } from "../bold/moped-front-bold.icon";
import { MopedFrontDuotoneIcon } from "../duotone/moped-front-duotone.icon";
import { MopedFrontFillIcon } from "../fill/moped-front-fill.icon";
import { MopedFrontLightIcon } from "../light/moped-front-light.icon";
import { MopedFrontRegularIcon } from "../regular/moped-front-regular.icon";
import { MopedFrontThinIcon } from "../thin/moped-front-thin.icon";

export const MopedFrontIcon = createIcon("MopedFront", {
  bold: MopedFrontBoldIcon,
  duotone: MopedFrontDuotoneIcon,
  fill: MopedFrontFillIcon,
  light: MopedFrontLightIcon,
  regular: MopedFrontRegularIcon,
  thin: MopedFrontThinIcon,
});
