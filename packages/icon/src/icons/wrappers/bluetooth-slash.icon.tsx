import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BluetoothSlashBoldIcon } from "../bold/bluetooth-slash-bold.icon";
import { BluetoothSlashDuotoneIcon } from "../duotone/bluetooth-slash-duotone.icon";
import { BluetoothSlashFillIcon } from "../fill/bluetooth-slash-fill.icon";
import { BluetoothSlashLightIcon } from "../light/bluetooth-slash-light.icon";
import { BluetoothSlashRegularIcon } from "../regular/bluetooth-slash-regular.icon";
import { BluetoothSlashThinIcon } from "../thin/bluetooth-slash-thin.icon";

export const BluetoothSlashIcon = memo(function BluetoothSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BluetoothSlashBoldIcon,
      duotone: BluetoothSlashDuotoneIcon,
      fill: BluetoothSlashFillIcon,
      light: BluetoothSlashLightIcon,
      regular: BluetoothSlashRegularIcon,
      thin: BluetoothSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
