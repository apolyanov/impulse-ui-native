import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DeviceMobileBoldIcon } from "../bold";
import { DeviceMobileDuotoneIcon } from "../duotone";
import { DeviceMobileFillIcon } from "../fill";
import { DeviceMobileLightIcon } from "../light";
import { DeviceMobileRegularIcon } from "../regular";
import { DeviceMobileThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DeviceMobileIcon = memo(function DeviceMobile(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DeviceMobileBoldIcon,
      duotone: DeviceMobileDuotoneIcon,
      fill: DeviceMobileFillIcon,
      light: DeviceMobileLightIcon,
      regular: DeviceMobileRegularIcon,
      thin: DeviceMobileThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
