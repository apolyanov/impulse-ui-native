import { createIcon } from "../../hocs/create-icon.hoc";
import { PrinterBoldIcon } from "../bold/printer-bold.icon";
import { PrinterDuotoneIcon } from "../duotone/printer-duotone.icon";
import { PrinterFillIcon } from "../fill/printer-fill.icon";
import { PrinterLightIcon } from "../light/printer-light.icon";
import { PrinterRegularIcon } from "../regular/printer-regular.icon";
import { PrinterThinIcon } from "../thin/printer-thin.icon";

export const PrinterIcon = createIcon("Printer", {
  bold: PrinterBoldIcon,
  duotone: PrinterDuotoneIcon,
  fill: PrinterFillIcon,
  light: PrinterLightIcon,
  regular: PrinterRegularIcon,
  thin: PrinterThinIcon,
});
