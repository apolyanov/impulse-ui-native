import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BluetoothBold } from "../bold";
import { BluetoothDuotone } from "../duotone";
import { BluetoothFill } from "../fill";
import { BluetoothLight } from "../light";
import { BluetoothRegular } from "../regular";
import { BluetoothThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bluetooth = memo(function Bluetooth(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BluetoothBold,
      duotone: BluetoothDuotone,
      fill: BluetoothFill,
      light: BluetoothLight,
      regular: BluetoothRegular,
      thin: BluetoothThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
