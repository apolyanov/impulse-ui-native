import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BluetoothConnectedBold } from "../bold";
import { BluetoothConnectedDuotone } from "../duotone";
import { BluetoothConnectedFill } from "../fill";
import { BluetoothConnectedLight } from "../light";
import { BluetoothConnectedRegular } from "../regular";
import { BluetoothConnectedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BluetoothConnected = memo(function BluetoothConnected(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BluetoothConnectedBold,
      duotone: BluetoothConnectedDuotone,
      fill: BluetoothConnectedFill,
      light: BluetoothConnectedLight,
      regular: BluetoothConnectedRegular,
      thin: BluetoothConnectedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
