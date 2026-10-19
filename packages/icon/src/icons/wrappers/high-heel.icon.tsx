import { createIcon } from "../../hocs/create-icon.hoc";
import { HighHeelBoldIcon } from "../bold/high-heel-bold.icon";
import { HighHeelDuotoneIcon } from "../duotone/high-heel-duotone.icon";
import { HighHeelFillIcon } from "../fill/high-heel-fill.icon";
import { HighHeelLightIcon } from "../light/high-heel-light.icon";
import { HighHeelRegularIcon } from "../regular/high-heel-regular.icon";
import { HighHeelThinIcon } from "../thin/high-heel-thin.icon";

export const HighHeelIcon = createIcon("HighHeel", {
  bold: HighHeelBoldIcon,
  duotone: HighHeelDuotoneIcon,
  fill: HighHeelFillIcon,
  light: HighHeelLightIcon,
  regular: HighHeelRegularIcon,
  thin: HighHeelThinIcon,
});
