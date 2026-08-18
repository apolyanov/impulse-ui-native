import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BluetoothBoldIcon } from "../bold/bluetooth-bold.icon";
import { BluetoothDuotoneIcon } from "../duotone/bluetooth-duotone.icon";
import { BluetoothFillIcon } from "../fill/bluetooth-fill.icon";
import { BluetoothLightIcon } from "../light/bluetooth-light.icon";
import { BluetoothRegularIcon } from "../regular/bluetooth-regular.icon";
import { BluetoothThinIcon } from "../thin/bluetooth-thin.icon";

export const BluetoothIcon = memo(function Bluetooth(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BluetoothBoldIcon,
      duotone: BluetoothDuotoneIcon,
      fill: BluetoothFillIcon,
      light: BluetoothLightIcon,
      regular: BluetoothRegularIcon,
      thin: BluetoothThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
