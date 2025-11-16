import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BluetoothXBold } from "../bold";
import { BluetoothXDuotone } from "../duotone";
import { BluetoothXFill } from "../fill";
import { BluetoothXLight } from "../light";
import { BluetoothXRegular } from "../regular";
import { BluetoothXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BluetoothX = memo(function BluetoothX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BluetoothXBold,
      duotone: BluetoothXDuotone,
      fill: BluetoothXFill,
      light: BluetoothXLight,
      regular: BluetoothXRegular,
      thin: BluetoothXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
