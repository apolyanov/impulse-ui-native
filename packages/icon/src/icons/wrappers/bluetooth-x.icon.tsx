import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BluetoothXBoldIcon } from "../bold/bluetooth-x-bold.icon";
import { BluetoothXDuotoneIcon } from "../duotone/bluetooth-x-duotone.icon";
import { BluetoothXFillIcon } from "../fill/bluetooth-x-fill.icon";
import { BluetoothXLightIcon } from "../light/bluetooth-x-light.icon";
import { BluetoothXRegularIcon } from "../regular/bluetooth-x-regular.icon";
import { BluetoothXThinIcon } from "../thin/bluetooth-x-thin.icon";

export const BluetoothXIcon = memo(function BluetoothX(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BluetoothXBoldIcon,
      duotone: BluetoothXDuotoneIcon,
      fill: BluetoothXFillIcon,
      light: BluetoothXLightIcon,
      regular: BluetoothXRegularIcon,
      thin: BluetoothXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
