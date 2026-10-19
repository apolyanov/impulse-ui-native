import { createIcon } from "../../hocs/create-icon.hoc";
import { UsbBoldIcon } from "../bold/usb-bold.icon";
import { UsbDuotoneIcon } from "../duotone/usb-duotone.icon";
import { UsbFillIcon } from "../fill/usb-fill.icon";
import { UsbLightIcon } from "../light/usb-light.icon";
import { UsbRegularIcon } from "../regular/usb-regular.icon";
import { UsbThinIcon } from "../thin/usb-thin.icon";

export const UsbIcon = createIcon("Usb", {
  bold: UsbBoldIcon,
  duotone: UsbDuotoneIcon,
  fill: UsbFillIcon,
  light: UsbLightIcon,
  regular: UsbRegularIcon,
  thin: UsbThinIcon,
});
