import { createIcon } from "../../hocs/create-icon.hoc";
import { VisorBoldIcon } from "../bold/visor-bold.icon";
import { VisorDuotoneIcon } from "../duotone/visor-duotone.icon";
import { VisorFillIcon } from "../fill/visor-fill.icon";
import { VisorLightIcon } from "../light/visor-light.icon";
import { VisorRegularIcon } from "../regular/visor-regular.icon";
import { VisorThinIcon } from "../thin/visor-thin.icon";

export const VisorIcon = createIcon("Visor", {
  bold: VisorBoldIcon,
  duotone: VisorDuotoneIcon,
  fill: VisorFillIcon,
  light: VisorLightIcon,
  regular: VisorRegularIcon,
  thin: VisorThinIcon,
});
