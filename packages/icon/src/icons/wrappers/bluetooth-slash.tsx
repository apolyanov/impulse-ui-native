import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BluetoothSlashBold } from "../bold";
import { BluetoothSlashDuotone } from "../duotone";
import { BluetoothSlashFill } from "../fill";
import { BluetoothSlashLight } from "../light";
import { BluetoothSlashRegular } from "../regular";
import { BluetoothSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BluetoothSlash = memo(function BluetoothSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BluetoothSlashBold,
      duotone: BluetoothSlashDuotone,
      fill: BluetoothSlashFill,
      light: BluetoothSlashLight,
      regular: BluetoothSlashRegular,
      thin: BluetoothSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
