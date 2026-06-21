import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DevicesBoldIcon } from "../bold";
import { DevicesDuotoneIcon } from "../duotone";
import { DevicesFillIcon } from "../fill";
import { DevicesLightIcon } from "../light";
import { DevicesRegularIcon } from "../regular";
import { DevicesThinIcon } from "../thin";

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
