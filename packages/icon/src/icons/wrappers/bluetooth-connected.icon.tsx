import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BluetoothConnectedBoldIcon } from "../bold/bluetooth-connected-bold.icon";
import { BluetoothConnectedDuotoneIcon } from "../duotone/bluetooth-connected-duotone.icon";
import { BluetoothConnectedFillIcon } from "../fill/bluetooth-connected-fill.icon";
import { BluetoothConnectedLightIcon } from "../light/bluetooth-connected-light.icon";
import { BluetoothConnectedRegularIcon } from "../regular/bluetooth-connected-regular.icon";
import { BluetoothConnectedThinIcon } from "../thin/bluetooth-connected-thin.icon";

export const BluetoothConnectedIcon = memo(function BluetoothConnected(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BluetoothConnectedBoldIcon,
      duotone: BluetoothConnectedDuotoneIcon,
      fill: BluetoothConnectedFillIcon,
      light: BluetoothConnectedLightIcon,
      regular: BluetoothConnectedRegularIcon,
      thin: BluetoothConnectedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
