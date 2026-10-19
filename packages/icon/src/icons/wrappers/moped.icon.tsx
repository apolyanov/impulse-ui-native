import { createIcon } from "../../hocs/create-icon.hoc";
import { MopedBoldIcon } from "../bold/moped-bold.icon";
import { MopedDuotoneIcon } from "../duotone/moped-duotone.icon";
import { MopedFillIcon } from "../fill/moped-fill.icon";
import { MopedLightIcon } from "../light/moped-light.icon";
import { MopedRegularIcon } from "../regular/moped-regular.icon";
import { MopedThinIcon } from "../thin/moped-thin.icon";

export const MopedIcon = createIcon("Moped", {
  bold: MopedBoldIcon,
  duotone: MopedDuotoneIcon,
  fill: MopedFillIcon,
  light: MopedLightIcon,
  regular: MopedRegularIcon,
  thin: MopedThinIcon,
});
