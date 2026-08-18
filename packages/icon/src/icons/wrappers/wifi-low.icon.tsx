import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WifiLowBoldIcon } from "../bold/wifi-low-bold.icon";
import { WifiLowDuotoneIcon } from "../duotone/wifi-low-duotone.icon";
import { WifiLowFillIcon } from "../fill/wifi-low-fill.icon";
import { WifiLowLightIcon } from "../light/wifi-low-light.icon";
import { WifiLowRegularIcon } from "../regular/wifi-low-regular.icon";
import { WifiLowThinIcon } from "../thin/wifi-low-thin.icon";

export const WifiLowIcon = memo(function WifiLow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiLowBoldIcon,
      duotone: WifiLowDuotoneIcon,
      fill: WifiLowFillIcon,
      light: WifiLowLightIcon,
      regular: WifiLowRegularIcon,
      thin: WifiLowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
