import { createIcon } from "../../hocs/create-icon.hoc";
import { InfoBoldIcon } from "../bold/info-bold.icon";
import { InfoDuotoneIcon } from "../duotone/info-duotone.icon";
import { InfoFillIcon } from "../fill/info-fill.icon";
import { InfoLightIcon } from "../light/info-light.icon";
import { InfoRegularIcon } from "../regular/info-regular.icon";
import { InfoThinIcon } from "../thin/info-thin.icon";

export const InfoIcon = createIcon("Info", {
  bold: InfoBoldIcon,
  duotone: InfoDuotoneIcon,
  fill: InfoFillIcon,
  light: InfoLightIcon,
  regular: InfoRegularIcon,
  thin: InfoThinIcon,
});
