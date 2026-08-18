import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceMobileSlashBoldIcon } from "../bold/device-mobile-slash-bold.icon";
import { DeviceMobileSlashDuotoneIcon } from "../duotone/device-mobile-slash-duotone.icon";
import { DeviceMobileSlashFillIcon } from "../fill/device-mobile-slash-fill.icon";
import { DeviceMobileSlashLightIcon } from "../light/device-mobile-slash-light.icon";
import { DeviceMobileSlashRegularIcon } from "../regular/device-mobile-slash-regular.icon";
import { DeviceMobileSlashThinIcon } from "../thin/device-mobile-slash-thin.icon";

export const DeviceMobileSlashIcon = memo(function DeviceMobileSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceMobileSlashBoldIcon,
      duotone: DeviceMobileSlashDuotoneIcon,
      fill: DeviceMobileSlashFillIcon,
      light: DeviceMobileSlashLightIcon,
      regular: DeviceMobileSlashRegularIcon,
      thin: DeviceMobileSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
