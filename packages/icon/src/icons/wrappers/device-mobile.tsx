import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceMobileBold } from "../bold";
import { DeviceMobileDuotone } from "../duotone";
import { DeviceMobileFill } from "../fill";
import { DeviceMobileLight } from "../light";
import { DeviceMobileRegular } from "../regular";
import { DeviceMobileThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceMobile = memo(function DeviceMobile(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceMobileBold,
      duotone: DeviceMobileDuotone,
      fill: DeviceMobileFill,
      light: DeviceMobileLight,
      regular: DeviceMobileRegular,
      thin: DeviceMobileThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
