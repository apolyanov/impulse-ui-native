import { createIcon } from "../../hocs/create-icon.hoc";
import { BluetoothConnectedBoldIcon } from "../bold/bluetooth-connected-bold.icon";
import { BluetoothConnectedDuotoneIcon } from "../duotone/bluetooth-connected-duotone.icon";
import { BluetoothConnectedFillIcon } from "../fill/bluetooth-connected-fill.icon";
import { BluetoothConnectedLightIcon } from "../light/bluetooth-connected-light.icon";
import { BluetoothConnectedRegularIcon } from "../regular/bluetooth-connected-regular.icon";
import { BluetoothConnectedThinIcon } from "../thin/bluetooth-connected-thin.icon";

export const BluetoothConnectedIcon = createIcon("BluetoothConnected", {
  bold: BluetoothConnectedBoldIcon,
  duotone: BluetoothConnectedDuotoneIcon,
  fill: BluetoothConnectedFillIcon,
  light: BluetoothConnectedLightIcon,
  regular: BluetoothConnectedRegularIcon,
  thin: BluetoothConnectedThinIcon,
});
