import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BluetoothConnectedBoldIcon } from "../bold";
import { BluetoothConnectedDuotoneIcon } from "../duotone";
import { BluetoothConnectedFillIcon } from "../fill";
import { BluetoothConnectedLightIcon } from "../light";
import { BluetoothConnectedRegularIcon } from "../regular";
import { BluetoothConnectedThinIcon } from "../thin";

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
