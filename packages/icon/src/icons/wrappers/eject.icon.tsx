import { createIcon } from "../../hocs/create-icon.hoc";
import { EjectBoldIcon } from "../bold/eject-bold.icon";
import { EjectDuotoneIcon } from "../duotone/eject-duotone.icon";
import { EjectFillIcon } from "../fill/eject-fill.icon";
import { EjectLightIcon } from "../light/eject-light.icon";
import { EjectRegularIcon } from "../regular/eject-regular.icon";
import { EjectThinIcon } from "../thin/eject-thin.icon";

export const EjectIcon = createIcon("Eject", {
  bold: EjectBoldIcon,
  duotone: EjectDuotoneIcon,
  fill: EjectFillIcon,
  light: EjectLightIcon,
  regular: EjectRegularIcon,
  thin: EjectThinIcon,
});
