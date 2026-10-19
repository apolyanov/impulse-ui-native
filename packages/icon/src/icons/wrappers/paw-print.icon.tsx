import { createIcon } from "../../hocs/create-icon.hoc";
import { PawPrintBoldIcon } from "../bold/paw-print-bold.icon";
import { PawPrintDuotoneIcon } from "../duotone/paw-print-duotone.icon";
import { PawPrintFillIcon } from "../fill/paw-print-fill.icon";
import { PawPrintLightIcon } from "../light/paw-print-light.icon";
import { PawPrintRegularIcon } from "../regular/paw-print-regular.icon";
import { PawPrintThinIcon } from "../thin/paw-print-thin.icon";

export const PawPrintIcon = createIcon("PawPrint", {
  bold: PawPrintBoldIcon,
  duotone: PawPrintDuotoneIcon,
  fill: PawPrintFillIcon,
  light: PawPrintLightIcon,
  regular: PawPrintRegularIcon,
  thin: PawPrintThinIcon,
});
