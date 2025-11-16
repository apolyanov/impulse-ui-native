import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceRotateBold } from "../bold";
import { DeviceRotateDuotone } from "../duotone";
import { DeviceRotateFill } from "../fill";
import { DeviceRotateLight } from "../light";
import { DeviceRotateRegular } from "../regular";
import { DeviceRotateThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceRotate = memo(function DeviceRotate(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceRotateBold,
      duotone: DeviceRotateDuotone,
      fill: DeviceRotateFill,
      light: DeviceRotateLight,
      regular: DeviceRotateRegular,
      thin: DeviceRotateThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
