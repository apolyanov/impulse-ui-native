import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DeviceMobileBoldIcon } from "../bold/device-mobile-bold.icon";
import { DeviceMobileDuotoneIcon } from "../duotone/device-mobile-duotone.icon";
import { DeviceMobileFillIcon } from "../fill/device-mobile-fill.icon";
import { DeviceMobileLightIcon } from "../light/device-mobile-light.icon";
import { DeviceMobileRegularIcon } from "../regular/device-mobile-regular.icon";
import { DeviceMobileThinIcon } from "../thin/device-mobile-thin.icon";

export const DeviceMobileIcon = memo(function DeviceMobile(
  props: IconWrapperProps,
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
