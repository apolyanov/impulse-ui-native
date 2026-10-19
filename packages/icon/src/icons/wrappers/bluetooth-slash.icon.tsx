import { createIcon } from "../../hocs/create-icon.hoc";
import { BluetoothSlashBoldIcon } from "../bold/bluetooth-slash-bold.icon";
import { BluetoothSlashDuotoneIcon } from "../duotone/bluetooth-slash-duotone.icon";
import { BluetoothSlashFillIcon } from "../fill/bluetooth-slash-fill.icon";
import { BluetoothSlashLightIcon } from "../light/bluetooth-slash-light.icon";
import { BluetoothSlashRegularIcon } from "../regular/bluetooth-slash-regular.icon";
import { BluetoothSlashThinIcon } from "../thin/bluetooth-slash-thin.icon";

export const BluetoothSlashIcon = createIcon("BluetoothSlash", {
  bold: BluetoothSlashBoldIcon,
  duotone: BluetoothSlashDuotoneIcon,
  fill: BluetoothSlashFillIcon,
  light: BluetoothSlashLightIcon,
  regular: BluetoothSlashRegularIcon,
  thin: BluetoothSlashThinIcon,
});
