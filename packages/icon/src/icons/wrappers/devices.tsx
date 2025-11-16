import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DevicesBold } from "../bold";
import { DevicesDuotone } from "../duotone";
import { DevicesFill } from "../fill";
import { DevicesLight } from "../light";
import { DevicesRegular } from "../regular";
import { DevicesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Devices = memo(function Devices(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DevicesBold,
      duotone: DevicesDuotone,
      fill: DevicesFill,
      light: DevicesLight,
      regular: DevicesRegular,
      thin: DevicesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
