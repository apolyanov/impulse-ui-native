import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceMobileSlashBold } from "../bold";
import { DeviceMobileSlashDuotone } from "../duotone";
import { DeviceMobileSlashFill } from "../fill";
import { DeviceMobileSlashLight } from "../light";
import { DeviceMobileSlashRegular } from "../regular";
import { DeviceMobileSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceMobileSlash = memo(function DeviceMobileSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceMobileSlashBold,
      duotone: DeviceMobileSlashDuotone,
      fill: DeviceMobileSlashFill,
      light: DeviceMobileSlashLight,
      regular: DeviceMobileSlashRegular,
      thin: DeviceMobileSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
