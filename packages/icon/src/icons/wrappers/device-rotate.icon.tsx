import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceRotateBoldIcon } from "../bold/device-rotate-bold.icon";
import { DeviceRotateDuotoneIcon } from "../duotone/device-rotate-duotone.icon";
import { DeviceRotateFillIcon } from "../fill/device-rotate-fill.icon";
import { DeviceRotateLightIcon } from "../light/device-rotate-light.icon";
import { DeviceRotateRegularIcon } from "../regular/device-rotate-regular.icon";
import { DeviceRotateThinIcon } from "../thin/device-rotate-thin.icon";

export const DeviceRotateIcon = memo(function DeviceRotate(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceRotateBoldIcon,
      duotone: DeviceRotateDuotoneIcon,
      fill: DeviceRotateFillIcon,
      light: DeviceRotateLightIcon,
      regular: DeviceRotateRegularIcon,
      thin: DeviceRotateThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
