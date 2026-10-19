import { createIcon } from "../../hocs/create-icon.hoc";
import { BluetoothBoldIcon } from "../bold/bluetooth-bold.icon";
import { BluetoothDuotoneIcon } from "../duotone/bluetooth-duotone.icon";
import { BluetoothFillIcon } from "../fill/bluetooth-fill.icon";
import { BluetoothLightIcon } from "../light/bluetooth-light.icon";
import { BluetoothRegularIcon } from "../regular/bluetooth-regular.icon";
import { BluetoothThinIcon } from "../thin/bluetooth-thin.icon";

export const BluetoothIcon = createIcon("Bluetooth", {
  bold: BluetoothBoldIcon,
  duotone: BluetoothDuotoneIcon,
  fill: BluetoothFillIcon,
  light: BluetoothLightIcon,
  regular: BluetoothRegularIcon,
  thin: BluetoothThinIcon,
});
