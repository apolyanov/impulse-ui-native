import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DevicesBoldIcon } from "../bold/devices-bold.icon";
import { DevicesDuotoneIcon } from "../duotone/devices-duotone.icon";
import { DevicesFillIcon } from "../fill/devices-fill.icon";
import { DevicesLightIcon } from "../light/devices-light.icon";
import { DevicesRegularIcon } from "../regular/devices-regular.icon";
import { DevicesThinIcon } from "../thin/devices-thin.icon";

export const DevicesIcon = memo(function Devices(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DevicesBoldIcon,
      duotone: DevicesDuotoneIcon,
      fill: DevicesFillIcon,
      light: DevicesLightIcon,
      regular: DevicesRegularIcon,
      thin: DevicesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
