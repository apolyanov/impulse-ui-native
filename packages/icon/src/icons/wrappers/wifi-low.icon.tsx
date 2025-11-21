import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiLowBoldIcon } from "../bold";
import { WifiLowDuotoneIcon } from "../duotone";
import { WifiLowFillIcon } from "../fill";
import { WifiLowLightIcon } from "../light";
import { WifiLowRegularIcon } from "../regular";
import { WifiLowThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
